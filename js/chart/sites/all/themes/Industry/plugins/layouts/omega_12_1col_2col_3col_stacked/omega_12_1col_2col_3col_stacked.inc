<?php

/**
 * Plugin definition.
 */

  $plugin = array(
    'title' => t('1 - 2 - 3 Column Stacked'),
    'category' => t('Omega: 12 Column Grid'),
    'icon' => 'omega_12_1col_2col_3col_stacked.png',
    'theme' => 'omega_12_1col_2col_3col_stacked',
    'css' => '../omega_panels_admin_12.css',
    'regions' => array(
      'top' => t('Top'),
      'upper-left' => t('Upper Left'),
      'upper-right' => t('Upper Right'),
      'middle-left' => t('Middle Left'),
      'middle-centre' => t('Middle Centre'),
      'middle-right' => t('Middle Right'),
      'lower' => t('Lower'),
    ),
  );