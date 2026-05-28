
## Data Model Overview

The application uses MongoDB with Mongoose schemas to manage ESG ingestion and audit workflows.

The system separates raw uploaded data from normalized reviewed data.

This design supports:

* auditability
* source tracking
* data normalization
* analyst review workflows

---

# Collections

## 1. RawRecord

Stores original uploaded rows exactly as received from source systems.

Fields:

* sourceType
* rawData
* uploadedAt

Purpose:

* preserves source-of-truth data
* allows audit verification
* supports future reprocessing

---

## 2. NormalizedRecord

Stores cleaned and normalized ESG records.

Fields:

* rawRecordId
* sourceType
* category
* amount
* unit
* normalizedValue
* status
* isSuspicious
* approvedBy
* locked

Purpose:

* standardized reporting
* analyst review
* suspicious data detection
* audit locking

---

## 3. AuditLog

Tracks workflow actions.

Fields:

* recordId
* action
* user
* timestamp

Purpose:

* maintain audit trail
* support compliance workflows

---

# Multi-Tenancy

The current prototype is designed for extension into multi-tenant architecture.

In production:

* each company would have a companyId
* records would be isolated per tenant
* analysts would only access authorized tenant data

Due to assignment time constraints, full authentication and tenant isolation were not implemented.

---

# Scope Categorization

The prototype supports ESG categorization patterns aligned with Scope 1/2/3 concepts.

Examples:

* Scope 1:

  * Diesel fuel
  * Petrol fuel

* Scope 2:

  * Electricity
  * Utility energy usage

* Scope 3:

  * Flights
  * Hotels
  * Taxi travel

The current implementation stores categories as normalized text fields.

---

# Source-of-Truth Tracking

Each normalized record references its original raw record using:

* rawRecordId

This preserves:

* original uploaded values
* ingestion traceability
* audit verification capability

---

# Unit Normalization

Example normalization:

* Wh → kWh

The system converts:

* 5000 Wh → 5 kWh

This allows consistent reporting across inconsistent source formats.

---

# Audit Trail

The system tracks:

* approvals
* locking actions
* timestamps

Locked records simulate finalized audit-ready ESG reporting rows.
