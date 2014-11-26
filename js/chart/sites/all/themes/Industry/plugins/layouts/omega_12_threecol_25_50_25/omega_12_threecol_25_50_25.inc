<?php

/**
 * Plugin definition.
 */

$plugin = array(
  'title' => t('Three Column Quarter / Half / Quarter'),
  'category' => t('Omega: 12 Column Grid'),
  'icon' => 'omega_12_threecol_25_50_25.png',
  'theme' => 'omega_12_threecol_25_50_25',
  'css' => '../omega_panels_admin_12.css',
  'regions' => array(
    'left' => t('Left side'),
    'middle' => t('Middle column'),
    'right' => t('Right side'),
  ),
);