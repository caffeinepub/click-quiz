# Specification

## Summary
**Goal:** Build an interactive decision tree navigator for the Verisure retention script that allows agents to click through conversation paths during customer calls.

**Planned changes:**
- Create interactive frontend with clickable navigation buttons for script flow
- Implement three main diagnostic branches: FINA (Financial), UNHAPPY (Dissatisfied), and NO USE (No usage)
- Build FINA branch with 3 subcategories: Waarde mismatch, Prioriteitsconflict, and Financiële nood
- Build UNHAPPY branch with 3 subcategories: PRICE, SERVICE, and SYSTEEM
- Build NO USE branch with 3 main categories, each with 3 sub-subcategories (9 total end scenarios)
- Display complete script content for each scenario including diagnosis questions, qualifying questions, reframing points, solutions, and closing questions
- Add breadcrumb navigation showing current path with clickable levels
- Use visual design to distinguish script sections (diagnosis, questions, reframing, solution, closing)
- Display all Dutch text exactly as provided in the original script

**User-visible outcome:** Agents can click through an interactive script navigator that guides them through the Verisure retention conversation flow, with clear visual hierarchy, breadcrumb navigation, and all script content in Dutch for use during live customer calls.
