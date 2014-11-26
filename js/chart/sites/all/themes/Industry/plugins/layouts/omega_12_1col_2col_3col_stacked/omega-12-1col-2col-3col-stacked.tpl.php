<div class="panel-display omega-grid omega-12-grid" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <!-- One column -->
  <div class="panel-panel grid-12" id="top">
    <div class="inside"><?php print $content['top']; ?></div>
  </div>
  <!-- Two column -->
  <div class="panel-panel grid-6" id="upper-left">
    <div class="inside"><?php print $content['upper-left']; ?></div>
  </div>
  <div class="panel-panel grid-6 omega" id="upper-right">
    <div class="inside"><?php print $content['upper-right']; ?></div>
  </div>
  <!-- Three column -->
  <div class="panel-panel grid-4" id="middle-left">
    <div class="inside"><?php print $content['middle-left']; ?></div>
  </div>
  <div class="panel-panel grid-4" id="middle-centre">
    <div class="inside"><?php print $content['middle-centre']; ?></div>
  </div>
  <div class="panel-panel grid-4 omega" id="middle-right">
    <div class="inside"><?php print $content['middle-right']; ?></div>
  </div>
  <!-- One column -->
  <div class="panel-panel grid-12" id="lower">
    <div class="inside"><?php print $content['lower']; ?></div>
  </div>

</div>