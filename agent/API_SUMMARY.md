# API Endpoints Summary

**API Version:** 0.1.0
**Title:** FastAPI

## Available Endpoints

### Uncategorized

- 🟢 **GET** `/`
  - **Summary:** Root
  - **Responses:** 200

### Contact

- 🔵 **POST** `/api/contact`
  - **Summary:** Submit Contact Form
  - **Responses:** 200, 422

## Data Models

### ContactFormRequest

- **name** ✳️ (`string`) - Name
- **company** (`string`) - Company
- **email** ✳️ (`string`) - Email
- **inquiry_type** (`string`) - Inquiry Type
- **message** ✳️ (`string`) - Message

### ContactFormResponse

- **success** ✳️ (`boolean`) - Success
- **message** ✳️ (`string`) - Message

### HTTPValidationError

- **detail** (`array`) - Detail

### ValidationError

- **loc** ✳️ (`array`) - Location
- **msg** ✳️ (`string`) - Message
- **type** ✳️ (`string`) - Error Type

---

*This summary is automatically generated from the OpenAPI schema when the backend starts.*

**Legend:** ✳️ = Required field | 🟢 GET | 🔵 POST | 🟡 PUT | 🔴 DELETE | 🟠 PATCH