import { describe, it, expect } from "vitest"
import { isValidEmail, isNonEmpty, validateField } from "./contact-page"

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

describe("ContactPage form submission prevention", () => {
  describe("submission prevention with invalid data", () => {
    it("prevents submission when name is empty by detecting validation error", () => {
      const formData = {
        name: "",
        email: "test@example.com",
        message: "This is a message",
      }

      const nameErrors = validateField("name", formData.name)
      const emailErrors = validateField("email", formData.email)
      const messageErrors = validateField("message", formData.message)

      const allErrors = { ...nameErrors, ...emailErrors, ...messageErrors }

      expect(allErrors.name).toBe("Name is required")
      expect(Object.keys(allErrors).length).toBeGreaterThan(0)
    })

    it("prevents submission when email is invalid by detecting validation error", () => {
      const formData = {
        name: "John Doe",
        email: "invalid-email",
        message: "This is a message",
      }

      const nameErrors = validateField("name", formData.name)
      const emailErrors = validateField("email", formData.email)
      const messageErrors = validateField("message", formData.message)

      const allErrors = { ...nameErrors, ...emailErrors, ...messageErrors }

      expect(allErrors.email).toBe("Enter a valid email")
      expect(Object.keys(allErrors).length).toBeGreaterThan(0)
    })

    it("prevents submission when message is empty by detecting validation error", () => {
      const formData = {
        name: "John Doe",
        email: "test@example.com",
        message: "",
      }

      const nameErrors = validateField("name", formData.name)
      const emailErrors = validateField("email", formData.email)
      const messageErrors = validateField("message", formData.message)

      const allErrors = { ...nameErrors, ...emailErrors, ...messageErrors }

      expect(allErrors.message).toBe("Message is required")
      expect(Object.keys(allErrors).length).toBeGreaterThan(0)
    })

    it("allows submission when all fields are valid", () => {
      const formData = {
        name: "John Doe",
        email: "test@example.com",
        message: "This is a test message",
      }

      const nameErrors = validateField("name", formData.name)
      const emailErrors = validateField("email", formData.email)
      const messageErrors = validateField("message", formData.message)

      const allErrors = { ...nameErrors, ...emailErrors, ...messageErrors }

      expect(Object.keys(allErrors).length).toBe(0)
    })
  })
})
