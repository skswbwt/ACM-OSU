$Id: README.txt,v 1.14 2010/11/22 22:46:22 mattyoung Exp $

INSTALLATION
-------------

Step 1) Download the latest Syntax highlighter javascript library from
http://alexgorbatchev.com/, extract the content and place the entire directory
inside any of the following directories:

  -  sites/all/libraries
       Recommended. This is Drupal's standard third party library install location.
  -  Site-file-directory-path
       usually sites/<site_domain>/files. This location is not recommended.
       Only use this if you for some reason need to run different versions of
       the syntaxhighlighter library for different sites in you multi-site install.
  -  Inside the syntaxhighlighter module directory
       This is not recommended. It's only for backward compability.

Library directory can be nested in any sub-directory of any name **except 'src'**.
Do not use the 'src' directory name to store the library.

After install, you should have something like this:
       
  sites/all/libraries/syntaxhighlighter_3.0.83
       
WARNING!
-------
Library location scan is only performed once and the location is cached. If
the library location is changed, visit admin/reports/status to force a rescan
and make sure the "Syntaxhighlighter javascript library" entry is green.

Step 2) Enable the syntaxhighlighter module


SETUP
-----

Enable the Syntaxhighlighter filter in an input format where you want to
syntaxhighlight code. Then re-arrange the order of filter per the following:

IMPORTANT: the Syntaxhighlighter filter must be *after* the
HTML filter or the wysiwyg filter (which ever you use) and the HTML filer must
allow the <pre> tag.  The default Filter HTML setting do not have the <pre> tag
in its allow list. You **must** add <pre> to the allow list.


CONFIGURATION
-------------

Go to admin/config/content/syntaxhighlighter to configure.

USAGE
-----

Syntax highlight code in node or comment with:

{syntaxhighlighter OPTIONS}
  any program code verbatim
  ...
{/syntaxhighlighter}

where OPTIONS is a Syntaxhighlighter options string. Visit
http://alexgorbatchev.com/ to get details.

If you use version 3.x of the javascript library, the OPTIONS string can be as follow:

  {syntaxhighlighter class="settings..." title="The title of your code block"}
    program code
  {/syntaxhighlighter}

NOTE: it's not necessary to escape '<' and '>' in program code as required by
the Syntaxhighlighter javascript library. The filter in the module does
that for you. So you can leave your code totally unchanged.


GET HELP
--------

Go to admin/help/syntaxhighlighter or filter/tips to get help


About AJAX Usage
----------------

On Ajax update, call Drupal.attachBehaviors(context) where context
is the element you have updated.

Known problem:

Autoloader and Ajax will not work if the brush is not already used on the page
when the page is first loaded. For example: if on the page, there is no 'cpp'
code block, then you ajax update some 'cpp' code block, then you will get "brush
not found" error.

If you need to do Ajax, it's probably best to not use autoloader.