BUGS:

1. search.js is called each time I visit someone's page and then go back OR I open photo and the close it (in photo case it being duplicated even twice). So each time buttons become duplicated. Striking example - buttons are duplicated when I mark user "Good" or "Bad".
2. Buttons not shown when I go to another VK chapter and go back with browser navigation.
3. Buttons not shown for lazy loaded items.

~~4. Async DB init has not enough time to complete before performing get query, so db = undefined.~~  
~~5. Wrong calculation of userId and userRating.~~  
~~6. Node is not hidden after mark as "Good" or "Bad": hideUsers should be called after pressing button.~~