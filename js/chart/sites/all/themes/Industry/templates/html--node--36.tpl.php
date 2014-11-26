<?php
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print render($title_prefix); ?>
  <?php if (!$page): ?>
    <h2<?php print $title_attributes; ?>>
      <a href="<?php print $node_url; ?>"><?php print $title; ?></a>
    </h2>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php if ($display_submitted): ?>
    <div class="meta submitted">
      <?php print $user_picture; ?>
      <?php print $submitted; ?>
    </div>
  <?php endif; ?>

  <div class="content clearfix"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
  </div>
<!doctype html>
<html>
<head>
<meta http-equiv="x-ua-compatible" content="IE=Edge"/>
<meta name="DCTERMS.coverage" content="Australia">
<meta name="DCTERMS.format" content="text/html">
<meta name="copyright" content="Copyright 2013 Department of Industry">
<meta name="DCTERMS.language" content="en">
<link rel="publisher" href="http://www.industry.gov.au">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<meta name="DCTERMS.type" content="Collection">
<meta name="DCTERMS.contributor" content="Department of Industry">
<meta name="DCTERMS.identifier" content="http://chart020714.industry.slicedtech.com.au/">
<meta name="aglsterms:function" content="Charts">
<meta name="aglsterms:availability" content="web.development@innovation.gov.au">
<link rel="stylesheet" href="">
</head>

<body>

	
		
		<iframe width="800" height="600" src="//www.youtube.com/embed/CbkL1Z1OXns?rel=0&autohide=1&showinfo=0" frameborder="0"></iframe>
	


</body>




 

</div>