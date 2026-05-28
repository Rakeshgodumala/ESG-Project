

## Architectural Decisions

### Why MERN Stack

I used the MERN stack because I have stronger familiarity with JavaScript ecosystems and could deliver a more reliable prototype within the assignment timeline.

--

# Data Source Decisions

## SAP Data

Chosen format:

* CSV export

Reason:

* realistic for SAP flat-file exports
* simple to prototype
* supports ingestion testing

Handled:

* fuel usage
* procurement-style records
* unit inconsistencies

Ignored:

* full SAP IDoc parsing
* OData integrations
* vendor mappings

---

## Utility Data

Chosen format:

* CSV utility export

Reason:

* common facilities export format
* easy to normalize

Handled:

* electricity usage
* meter-like records
* Wh normalization

Ignored:

* tariff structures
* billing cycles
* PDF OCR extraction

---

## Travel Data

Chosen format:

* CSV travel export

Handled:

* flights
* hotels
* taxi travel

Ignored:

* airport code distance calculation
* travel APIs
* emissions factor calculations

---

# Review Workflow Decisions

The system supports:

* pending review
* approval
* audit locking

Reason:

* aligns with real ESG audit workflows

---

# Suspicious Data Detection

Negative values are flagged as suspicious.

Example:

* negative travel distance
* negative utility usage

Reason:

* simulate analyst review scenarios

---

# Questions For PM

If time allowed, I would ask:

* expected scale of ingestion
* preferred ESG taxonomy
* authentication requirements
* required audit compliance standards
* expected file formats in production
