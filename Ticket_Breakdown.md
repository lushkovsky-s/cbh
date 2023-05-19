# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1 - Add Custom ID field for Agents

Description: Add a "Custom ID" field on the Agent's profile page for Facilities to input their own identification number for each Agent. This field will be available via the API and can be edited at any time.

Acceptance Criteria:
- A "Custom ID" field is added to the Agent's profile page.
- The "Custom ID" field is required to save Agents on the platform.
- The "Custom ID" can be edited by Facilities at any time.
- The Custom ID is saved to the Agent's database entry.

Time Estimate: 2 hours
Effort Estimate: Easy

Implementation Details:
- A new field is added to the Agent's database table to store the Custom ID.
- A "Custom ID" input field is added to the Agent's profile page along with the necessary validation logic.
- API is updated to support the new field.

Ticket 2 - Get Custom ID from Facilities

Description: Update the getShiftsByFacility function to include the Custom ID of the Agent assigned to each Shift. This allows Facilities to view their own identification number for each Agent on the report.

Acceptance Criteria:
- The getShiftsByFacility function is updated to include the Custom ID field next to each Agent metadata.
- The Custom ID field is only returned to Facilities that have saved a Custom ID for that Agent.

Time Estimate: 1 hour
Effort Estimate: Easy

Implementation Details:
- The getShiftsByFacility function is updated to query the Custom ID field of the Agent assigned to each Shift.
- Conditionals are added to only include the Custom ID field if it has been saved by the Facility.

Ticket 3 - Add Custom ID to Reports

Description: Update the generateReport function to include the Custom ID instead of the internal database id of each Agent on the quarterly report.

Acceptance Criteria:
- The generateReport function is updated to use the Custom ID instead of the internal database id of each Agent on the report.
- The Custom ID is only included for Agents that have a Custom ID saved by their Facility.
- The report is generated as a PDF and includes the new Custom ID field.

Time Estimate: 2 hours
Effort Estimate: Medium

Implementation Details:
- The generateReport function is updated to query the Custom ID field of each Agent assigned to the Shifts being reported.
- A conditional is added to include the Custom ID field only if it has been saved by the Facility.
- The report's PDF template is updated to include the new Custom ID field.

Ticket 4 - Data Validation and Migration

Description: Update the data validation function and migrate existing data to ensure that Custom ID field is correctly saved, validated and retrieved.

Acceptance Criteria:
- The data validation function is updated to ensure that the Custom ID field is saved in a standardized format.
- The migration function is added to update existing Agent database entries with Custom ID fields.
- The validation function is updated to validate the Custom ID field of existing Agents.

Time Estimate: 3 hours
Effort Estimate: Hard

Implementation Details:
- The data validation function is updated to evenly match the format of the user input for Custom ID when saving to the database.
- The migration function is added to update existing database entries with Custom ID fields based on old identification format.
- The validation function is updated to ensure migration has been successful and Custom ID field is correctly validated for all saved Agents.
