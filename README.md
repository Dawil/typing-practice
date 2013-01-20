typing-practice
===============

This app will provide an easy way to practive your typing skills. It will do
this by pulling random SFW articles out of wikipedia and giving you the tools
needed to type it easily in good form. It will also give you numbers about your
attempt, e.g. time taken, word/min, keys/min, errors/min or errors/word. Finally
it'll give you the option to export your data as json, csv, or directly into a
google spreadsheet.

sitemap
=======

When you enter the site you'll be presented with a random paragraph from a
random wiki article. There will be a textarea underneath for you to type into.
Once you have completed the paragraph you'll be given your results and then the
option to export them, try the sme paragraph again, or try a new paragraph.

Wiki Articles
=============

An angularjs service will be needed to grab wiki articles. It'll have the
following capabilities:

* get article
* get paragraph from article

Maybe later I'll look into getting articles and paragraphs by reading
comprehension.
