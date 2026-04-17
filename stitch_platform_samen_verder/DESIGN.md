# Design System Strategy: The Narrative Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Narrative Sanctuary."** 

When parents interact with this platform, they are often in a state of high emotional vulnerability. A "standard" UI—with its rigid grids, clinical borders, and cold blue accents—feels like a bureaucratic hurdle. Instead, our goal is to create a digital environment that feels like a high-end editorial journal: a safe, quiet space for reflection and guidance. 

We break the "template" look by utilizing **intentional asymmetry** and **tonal depth**. Instead of centering everything, we allow elements to breathe with generous, uneven whitespace, mimicking the layout of a premium lifestyle magazine. This system rejects the industrial and embraces the organic, using soft layering to guide the user’s eye without forcing it.

---

## 2. Colors & Tonal Depth
Our palette is rooted in earthiness and warmth, moving away from "tech-native" aesthetics toward a more human, tactile experience.

*   **Primary (#5c614f):** A grounded, mossy green used for moments of stability and primary action.
*   **Surface Hierarchy (The Foundation):** We use a range of off-whites and warm beiges to define the "weight" of the information.
*   **The "No-Line" Rule:** To maintain a soft, non-judgmental atmosphere, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` (#f5f3f0) section should sit directly against a `surface` (#fbf9f6) background to create a soft, natural edge.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked sheets of fine paper. An inner card (`surface-container-lowest`) should sit atop a section background (`surface-container-low`). This creates depth without visual noise.
*   **The "Glass & Gradient" Rule:** For floating elements like navigation bars or pop-overs, utilize Glassmorphism. Use a semi-transparent `surface` color with a `backdrop-filter: blur(20px)`. This allows the warm tones of the background to bleed through, ensuring the UI feels integrated rather than "pasted on."
*   **Signature Textures:** Apply subtle linear gradients to hero backgrounds and main CTAs. Transition from `primary` (#5c614f) to `primary_container` (#e0e5ce) at a 135-degree angle to provide a "soulful" glow that flat colors cannot achieve.

---

## 3. Typography
The typography system uses a pairing of **Plus Jakarta Sans** for structure and **Manrope** for warmth.

*   **Display & Headline (Plus Jakarta Sans):** These levels convey the "Professional" side of the brand. Use `display-lg` and `display-md` with generous letter-spacing to create a sense of calm and authority.
*   **Title & Body (Manrope):** Manrope’s soft, rounded glyphs are chosen for their readability and "non-judgmental" character. 
*   **The Editorial Touch:** Use `headline-sm` for pull-quotes or supportive messages. Large-scale typography is a core design element here—don't be afraid to let a headline take up significant vertical space to emphasize a hopeful message.

---

## 4. Elevation & Depth
In this system, "elevation" does not mean "distance from the screen"; it means "tonal clarity."

*   **The Layering Principle:** Avoid shadows where background shifts can do the work. A `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f5f3f0) background provides a clean, sophisticated lift.
*   **Ambient Shadows:** If a floating element (like a modal or FAB) requires a shadow, it must be an **Ambient Shadow**. Use the `on-surface` color (#313330) at 4%–6% opacity with a blur radius of 40px–60px. This mimics soft, indirect sunlight rather than a harsh digital drop shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in high-contrast situations), use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism Depth:** When using glass layers, ensure the `surface-tint` is applied subtly to the edge to give the "glass" a slight physical thickness, enhancing the premium feel.

---

## 5. Components
Every component must feel soft to the touch and intentional in its placement.

*   **Buttons:**
    *   **Primary:** Uses the `primary` fill with `on_primary` text. Use `xl` (1.5rem) roundedness to create a "pill" shape that feels approachable.
    *   **Secondary:** Use a `surface-container-highest` fill. Avoid borders.
*   **Cards & Lists:** **Strictly forbid divider lines.** Separate list items using the Spacing Scale (vertical whitespace) or subtle background shifts (e.g., alternating between `surface` and `surface-container-low`).
*   **Input Fields:** Use a `surface-variant` (#e3e3de) background with a `md` (0.75rem) corner radius. The label should use `label-md` in `on-surface-variant` to keep the interface quiet.
*   **Chips:** Use `primary-container` for active states. They should feel like soft, rounded pebbles.
*   **The "Path" Component (Unique to this System):** A custom progress indicator for parents. Instead of a linear bar, use a series of soft, overlapping circles or "blobs" in `tertiary_container` to represent the journey—less like a checklist, more like a natural progression.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place text on the left and imagery slightly offset to the right to create an editorial, high-end feel.
*   **Prioritize Whitespace:** If you think there is enough space, add 20% more. Space equals "Calm."
*   **Use Tonal Transitions:** Shift background colors between page sections to signal a change in topic.

### Don't:
*   **No Pure Black:** Never use #000000. Use `on_surface` (#313330) for text to keep the contrast "soft."
*   **No Sharp Corners:** Avoid the `none` or `sm` roundedness tokens unless for tiny functional icons.
*   **No Clinical Blue:** Stay within the warm beige and green spectrum to avoid a "hospital" or "legal" atmosphere.
*   **No Dense Grids:** Avoid packing multiple columns of information. Stick to single or double-column layouts to maintain a narrative flow.

---

## 7. Accessibility Note
While the aesthetic is soft and low-contrast, ensure all functional text meets AA standards by utilizing the `on-surface` and `primary` tokens against their respective containers. The "Ghost Border" should be used when interactive elements need a clearer hit-box for users with motor or visual impairments, without sacrificing the sanctuary-like aesthetic.