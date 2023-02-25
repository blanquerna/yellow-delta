# yellow-delta
Theme for Datenstrom-Yellow 0.8.3

Basad en la gran feina de disseny de l'equip de Datenstrom i de Martin Blomgren amb el seu tema [Clarity](https://github.com/zenblom/yellow-clarity)

## Semantic HTML
Redefined the structure of the following pages with the layout and tag elements according to the model

<p align="center"><img src="semantic-html-structure-h.png?raw=true" alt="Screenshot" width="400">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<img src="semantic-html-structure-v.png?raw=true" alt="Screenshot" width="400"></p>

All basic layout options are in the **delta.css** file.

By default it is the one that would correspond to the first image, with a horizontal menu bar. In pages with scrolling, it is fixed at the beginning of the page; so that it moves together with the page, the *nav* element must be modified in *delta.css* with the `position: absolute;` property. To leave the vertical navigation bar as active it is enough to rename the files *delta.css* as *delta-old.css* and the file *delta-vertical.css* as *delta.css*.

The footer is in the *footer* block; on pages without scrolling, it is repositioned at the bottom of the window with a js function.

## From the blog title and disclaimers
Danestrom-Yellow's option for the home page is to match the first `content` directory (default _1-home_) and open the default `page.md` file. Putting an entry with the blog name addressed at the same point as the first menu entry would be redundant, so the _blog title_ is not shown, but the blog name is assigned to the title of this first page `1-home/page.md`.

To indicate ownership of the page, _layouts/delta-footer.html_ must be modified

## From the _responsive_ design of the page
The width of the page elements adapt to the width of the window. When the window is less than 960px the margins are reduced and if there was a frame with the label `aside` it would stop being floating and the `main` would go to the bottom.
In an even smaller window size the social media options would not be visible.

For the printing of the content of the page only _the logo and the title of the page, the content of the main and the mention of copyright_ will be printed.

## From the default plate of the pages

The default page template, _delta-default.html_, contemplates a single column, with no indication of the page title indicated in `Title`. All visualization must be indicated in the body of the page, including titles, subheadings, text, images, ...

<p align="center"><img src="page-init.png?raw=true" alt="Screenshot" width="400" style="border:#333 1px solid; margin-left:30px;" >&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
<img src="page-init-v.png?raw=true" alt="Screenshot" width="400" style="border:#333 1px solid"></p>

To control the display of pages in the menu the **Status** entry in the page header must be used. With the value `Status: unlisted` the page would not be visible from the menu, but would be accessible with a link.

To add a _sidebar_ frame, it is enough to create a block labeled `aside` with the desired content below the `main` block of the form; it will be automatically created floating and with the size in which the _blog_ template was created.
 
## From the blog template
Consider two columns, one main (`main`) for entries and a second as a _sidebar_, with information about authors, entry tags,...

There is a set of text strips commonly used in blogs that have not yet been incorporated into internationalization. Meanwhile, see [how to add these entries to the configuration file](#language-adds).

So that the _sidebar_ column does not appear, it is enough to delete the call to _delta-blog-sidebar.html_ in each of the two _blog_ templates
There are two basic blog templates.

#### Blog entry index template and entry selection
The first is `delta-blog-start.html` which generates two types of output:

* Entry to the blog with display of the latest entries
* Display of entries subject to search by tag or author

<p align="center"><img src="/media/images/page-blog-all.png?raw=true" alt="Screenshot" width="400" style="border:#333 1px solid">&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
<img src="/media/images/page-blog-tag.png?raw=true" alt="Screenshot" width="400" style="border:#333 1px solid"></p>

In the entries it is convenient to put the `[--more--]` tag after a few sentences so that only the first part is shown in these summary pages.

These post relationships do not display each post's share option or tags.

The sidebar column shows the bolded entry of the `9-about` section, the 'recent entries', 'Tags' used and 'Authors' with an indication of the number of appearances. This entire column is generated with the `delta-blog-sidebar.html` template

In the `main` block, in the case of showing the search by tags or authors, an icon with the corresponding category (tag or author) and the search item will appear in the title of the section.

#### Input Detail Template
The `delta-blog.html` template generates the output of _display an entry_. It includes the title of the post, the author, the date of publication and the social networks where the post is shared, the body of the post and its tags.

<p align="center"><img src="page-bloc entry.png?raw=true" alt="Screenshot" width="400" style="border:#333 1px solid "></p>

The author reference includes a generic author icon that can be changed to a custom author icon with their image, as provided in the _delta-blog.html_ template. The image must have the author's name without spaces with the `.png` extension in the `media/thumbnails/` folder.

The _Share with_ entry includes 3 social networks and copy the link.

The entry footer includes the assigned tags.

## From social networks

The _delta-navigation.html_ menu generation template includes a call to the social media _delta-socialmedia.html_ template and they are included in the right menu bar with icons. The references of each social network must be updated with the corresponding hashtags. Only those references where it is present should be included.

The _delta-blog.html_ template includes for each post the option to share with social networks with the _delta-blog-share.html_ template. This template has been prepared for sharing with facebook, twitter and linkedin, as well as copying the page link.

## From js : _rho.js_
It is a minimal script with only two functions:
* Move the footer block to the bottom of the window if the page does not cover it all.
* Show a 'goTop' button that should allow you to move to the top of the page.

<a name="language-adds"></a>
## Use of usual text tags on blog pages.
To make use of the API functions you should add the entries to `system/extensions/yellow-language.ini`:

> BlogShare: Share with
BlogRecent: Recent entries  
BlogAuthors: Authors  
BlogTags: Tags  
BlogYear: Year  
BlogAuthor: Author  
BlogTag: Tag  

Alternatively tags will appear and have to be replaced in the respective pages of the `system/layouts` directory

## More information

More information in [Datenstrom Yellow Help ](https://datenstrom.se/yellow/help/) and especially in [Datenstrom Yellow API ](https://datenstrom.se/yellow/help/api-for-developers)
