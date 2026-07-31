import { describe, it, expect } from "vitest"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isValidEmail(email: string): boolean {
  return emailPattern.test(email.trim())
}

function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

function validateField(fieldName: string, value: string): Record<string, string> {
  const errors: Record<string, string> = {}

  if (fieldName === "name" && !isNonEmpty(value)) {
    errors.name = "Name is required"
  }
  if (fieldName === "email") {
    if (!isNonEmpty(value)) {
      errors.email = "Email is required"
    } else if (!isValidEmail(value)) {
      errors.email = "Enter a valid email"
    }
  }
  if (fieldName === "message" && !isNonEmpty(value)) {
    errors.message = "Message is required"
  }

  return errors
}

describe("contact form validation", () => {
  describe("isValidEmail", () => {
    it("rejects empty email", () => {
      expect(isValidEmail("")).toBe(false)
    })

    it("rejects email without @", () => {
      expect(isValidEmail("userexample.com")).toBe(false)
    })

    it("rejects email without domain", () => {
      expect(isValidEmail("user@")).toBe(false)
    })

    it("rejects email without top-level domain", () => {
      expect(isValidEmail("user@example")).toBe(false)
    })

    it("accepts valid email", () => {
      expect(isValidEmail("user@example.com")).toBe(true)
    })

    it("accepts valid email with subdomain", () => {
      expect(isValidEmail("user@mail.example.com")).toBe(true)
    })

    it("trims whitespace", () => {
      expect(isValidEmail("  user@example.com  ")).toBe(true)
    })

    it("rejects email with spaces", () => {
      expect(isValidEmail("user @example.com")).toBe(false)
    })
  })

  describe("isNonEmpty", () => {
    it("rejects empty string", () => {
      expect(isNonEmpty("")).toBe(false)
    })

    it("rejects whitespace-only string", () => {
      expect(isNonEmpty("   ")).toBe(false)
    })

    it("rejects tab-only string", () => {
      expect(isNonEmpty("\t")).toBe(false)
    })

    it("accepts non-empty string", () => {
      expect(isNonEmpty("text")).toBe(true)
    })

    it("accepts string with leading/trailing whitespace", () => {
      expect(isNonEmpty("  text  ")).toBe(true)
    })
  })

  describe("validateField", () => {
    describe("name field", () => {
      it("returns error when name is empty", () => {
        const errors = validateField("name", "")
        expect(errors.name).toBe("Name is required")
      })

      it("returns error when name is whitespace-only", () => {
        const errors = validateField("name", "   ")
        expect(errors.name).toBe("Name is required")
      })

      it("returns no error when name is valid", () => {
        const errors = validateField("name", "John Doe")
        expect(errors.name).toBeUndefined()
      })
    })

    describe("email field", () => {
      it("returns error when email is empty", () => {
        const errors = validateField("email", "")
        expect(errors.email).toBe("Email is required")
      })

      it("returns email format error when email is invalid", () => {
        const errors = validateField("email", "userexample.com")
        expect(errors.email).toBe("Enter a valid email")
      })

      it("returns no error when email is valid", () => {
        const errors = validateField("email", "user@example.com")
        expect(errors.email).toBeUndefined()
      })
    })

    describe("message field", () => {
      it("returns error when message is empty", () => {
        const errors = validateField("message", "")
        expect(errors.message).toBe("Message is required")
      })

      it("returns error when message is whitespace-only", () => {
        const errors = validateField("message", "   ")
        expect(errors.message).toBe("Message is required")
      })

      it("returns no error when message is valid", () => {
        const errors = validateField("message", "This is a message")
        expect(errors.message).toBeUndefined()
      })
    })
  })
})
