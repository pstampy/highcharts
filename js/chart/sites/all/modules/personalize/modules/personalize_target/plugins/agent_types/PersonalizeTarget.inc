<?php
/**
 * @file
 * Provides an extra test agent type for testing with multiple agent types.
 */

class PersonalizeTarget extends PersonalizeAgentBase implements PersonalizeExplicitTargetingInterface {

  /**
   * Implements PersonalizeAgentInterface::create().
   */
  public static function create($agent_data) {
    return new self($agent_data->machine_name, $agent_data->label, $agent_data->data, $agent_data->status);
  }

  /**
   * Implements PersonalizeExplicitTargetingInterface::explicitTargetingSupportMultiple().
   */
  public static function explicitTargetingSupportMultiple() {
    return PersonalizeExplicitTargetingInterface::EXPLICIT_TARGETING_MULTIPLE_OR;
  }

  /**
   * Implements PersonalizeAgentInterface::getType().
   */
  public function getType()
  {
    return 'personalize_target';
  }

  /**
   * Implements PersonalizeAgentInterface::getAssets().
   */
  public function getAssets() {
    return array(
      'js' => array(
        drupal_get_path('module', 'personalize_target') . '/js/personalize_target.js' => array('type' => 'file', 'scope' => 'footer', 'defer' => TRUE),
      )
    );
  }

  /**
   * Implements PersonalizeAgentInterface::useClientSideGoalDelivery().
   */
  public function useClientSideGoalDelivery()
  {
    return TRUE;
  }

  /**
   * Implements PersonalizeAgentInterface::sendGoal().
   */
  public function sendGoal($goal_name, $value = NULL) {

  }


  /**
   * Implements PersonalizeAgentInterface::convertContextToFeatureString().
   */
  public static function convertContextToFeatureString($name, $value) {
    return $name . '::' . $value;
  }

}