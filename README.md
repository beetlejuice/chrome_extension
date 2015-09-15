BUGS:
1. search.js is called each time I visit someone's page and then go back OR I open photo and the close it (in photo case it being duplicated even twice).
   So each time buttons become duplicated.
2. Not called when I go to another VK chapter and go back with browser navigation.
<!-- 3. Async DB init has not enough time to complete before performing get query, so db = undefined. -->
4. Wrong calculation of userId and userRating.