# TRADEOFFS.md

## 1. PDF OCR Extraction Not Implemented

I intentionally avoided PDF OCR extraction because:

* OCR pipelines require significant additional complexity
* assignment timeline was limited
* normalization workflows were prioritized

The prototype focuses on structured CSV ingestion instead.

---

## 2. Authentication Not Implemented

User authentication and authorization were not implemented.

Reason:

* assignment focused more heavily on ingestion and data modeling
* avoided unnecessary complexity during prototype phase

---

## 3. Advanced ESG Calculations Not Implemented

The system does not currently calculate:

* emissions factors
* carbon equivalencies
* automated ESG scoring

Reason:

* focused on ingestion, normalization, and audit workflows first
* calculations vary heavily by business rules and ESG frameworks
