<div class="panel-display omega-grid omega-12-threecol-25-50-25" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="panel-panel grid-3" id="left">
    <div class="inside"><?php print $content['left']; ?></div>
  </div>
  <div class="panel-panel grid-6" id="middle">
    <div class="inside"><?php print $content['middle']; ?></div>
  </div>
  <div class="panel-panel grid-3" id="right">
    <div class="inside"><?php print $content['right']; ?></div>
  </div>
</div>
