# Getting Priya Dream Kitchen onto Google

The code side is done: sitemap, robots.txt, canonical tag, titles,
descriptions, schema markup, alt text and compressed images. What is left
needs your own Google login, so only you can do it.

Live address used everywhere: `https://priyadreamkitchen.netlify.app`
(set in `src/lib/site.js` — change it there if you move to a custom domain).

---

## 1. Deploy first

Push the `V-3` branch to whatever Netlify deploys (usually `main`), then open
these and check they load:

- https://priyadreamkitchen.netlify.app/robots.txt
- https://priyadreamkitchen.netlify.app/sitemap.xml

## 2. Verify Google Search Console (about 10 minutes)

1. Go to https://search.google.com/search-console and sign in.
2. Click **Add property** → choose **URL prefix** (not "Domain"; a
   `netlify.app` address can't use the Domain option) → enter
   `https://priyadreamkitchen.netlify.app/`.
3. Pick the **HTML tag** method. Google shows a tag like
   `<meta name="google-site-verification" content="AbC123..." />`.
4. Send me only the `content` value. I add it to `src/app/layout.js` as
   `verification: { google: "AbC123..." }`, you deploy, then click **Verify**.

## 3. Ask Google to index the site

In Search Console:

1. **Sitemaps** → enter `sitemap.xml` → **Submit**.
2. **URL Inspection** → paste `https://priyadreamkitchen.netlify.app/` →
   **Request indexing**.

A new site usually appears within a few days to two weeks. Check
**Pages** in Search Console to see when it's indexed.

## 4. Google Business Profile (the biggest win for local searches)

People searching "cooking class Weligama" mostly see the **map results**,
which come from Google Business Profile, not from the website.

1. Go to https://business.google.com and create a profile for
   **Priya Dream Kitchen**, category **Cooking class**.
2. Use the same name, phone (+94 74 241 7308) and opening hours
   (8 AM – 10 PM daily) as the website. Matching details help ranking.
3. Add the website link, the kitchen photos and set the map pin exactly.
4. After each class, ask happy guests to leave a Google review. Reply to
   every review.

## 5. Backlink strategy (links from other sites)

Focus on a few real, relevant links. Never buy links or use link
packages; Google penalises that.

**Do first (free, high value for tourists):**

- **TripAdvisor:** list it as an attraction/experience in Weligama, with the website link.
- **Airbnb Experiences, GetYourGuide, Viator:** list the class; they also bring direct bookings.
- **Facebook page and Instagram:** put the website link in the bio and page info.

**Local partners:**

- Ask Weligama and Mirissa guest houses, surf camps and hostels to
  recommend the class on their website or "things to do" page. Offer
  them a small referral thank-you.
- Tuk-tuk drivers and tour guides who bring guests often have Facebook
  pages or WhatsApp catalogues; ask them to share the link.

**Content and press:**

- Invite travel bloggers and Instagram creators who visit Weligama to
  take a free class; many write a post with a link.
- Pitch a short story to Sri Lankan travel sites and local news (a home
  cook teaching travellers traditional clay-pot cooking).

Track new links in Search Console under **Links**.

## 6. Old addresses to clean up

- The old GitHub Pages address
  (`nimeshakalanka.github.io/Priya-Dream-Kitchen.github.io`) returns 404.
  If it still appears in Google, it will drop out on its own.
- The project once used the domain `priyadreamkitchen.app`. If you still
  own it, either point it at Netlify (Netlify → Domain management) and tell
  me, so I switch `src/lib/site.js` to it, or let it lapse. Don't leave it
  showing a different copy of the site.
