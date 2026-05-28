
# 1. SAP Fuel & Procurement Data

## Research

I researched common SAP export patterns including:

* flat CSV exports
* procurement tables
* fuel reporting structures

Typical challenges observed:

* inconsistent units
* plant codes
* vendor-specific formatting

## Prototype Choice

I simulated:

* diesel fuel
* petrol fuel
* heating usage

Reason:

* realistic Scope 1 style operational data

---

# 2. Utility Electricity Data

## Research

I reviewed common utility export formats:

* electricity CSV exports
* meter usage formats

Typical challenges:

* inconsistent billing periods
* varying energy units
* tariff structures

## Prototype Choice

I simulated:

* electricity usage
* solar energy
* cooling systems

The prototype normalizes:

* Wh → kWh

---

# 3. Corporate Travel Data

## Research

I reviewed:

* Concur-style exports
* travel expense structures

Typical challenges:

* airport-only records
* missing distances
* mixed travel categories

## Prototype Choice

I simulated:

* flights
* hotels
* taxi travel
* train travel

Negative values are intentionally included to test suspicious record detection.