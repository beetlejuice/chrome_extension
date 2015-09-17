BUGS:

* Buttons not shown when I go to another VK chapter and go back with browser navigation.
* Buttons not shown for lazy loaded items.

* ~~search.js is called each time I visit someone's page and then go back OR I open photo and the close it (in photo case it being duplicated even twice). So each time buttons become duplicated. Striking example - buttons are duplicated when I mark user "Good" or "Bad".~~  
* ~~Async DB init has not enough time to complete before performing get query, so db = undefined.~~  
* ~~Wrong calculation of userId and userRating.~~  
* ~~Node is not hidden after mark as "Good" or "Bad": hideUsers should be called after pressing button.~~