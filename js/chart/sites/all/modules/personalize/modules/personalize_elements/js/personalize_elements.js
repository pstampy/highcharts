(function ($) {

  Drupal.personalize = Drupal.personalize || {};
  Drupal.personalize.executors = Drupal.personalize.executors || {};
  Drupal.personalize.executors.personalizeElements = {
    execute: function($option_set, choice_name, osid) {
      var element = Drupal.settings.personalize_elements.elements[osid];
      if (element == undefined) return;
      if (Drupal.personalizeElements.hasOwnProperty(element.variation_type) && typeof Drupal.personalizeElements[element.variation_type].execute === 'function') {
        var choices = Drupal.settings.personalize.option_sets[osid].options,  choiceNames = Drupal.settings.personalize.option_sets[osid].option_names, choiceIndex = choiceNames.indexOf(choice_name);
        // Option Sets of type Personalize Elements have the concept of a control option,
        // where no change should be made to the selector. We need to pass in whether this
        // is the control option.
        var isControl = choice_name == Drupal.settings.personalize_elements.controlOptionName;
        var selectedContent = choices[choiceIndex]['personalize_elements_content'];
        Drupal.personalizeElements[element.variation_type].execute($option_set, selectedContent, isControl, osid);
        Drupal.personalize.executorCompleted($option_set, choice_name, osid);
      }
    }
  };

  Drupal.personalizeElements = {};

  Drupal.personalizeElements.replaceText = {
    controlText : {},
    execute : function($selector, selectedContent, isControl, osid) {
      // We need to keep track of how we've changed the element, if only
      // to support previewing different options.
      if (!this.controlText.hasOwnProperty(osid)) {
        this.controlText[osid] = $selector.text();
      }
      if (isControl) {
        $selector.text(this.controlText[osid]);
      }
      else {
        $selector.text(selectedContent);
      }

    }
  };

  Drupal.personalizeElements.addClass = {
    addedClasses : {},
    execute : function($selector, selectedContent, isControl, osid) {
      // We need to keep track of how we've changed the element, if only
      // to support previewing different options.
      if (!this.addedClasses.hasOwnProperty(osid)) {
        this.addedClasses[osid] = [];
      }
      for (var i in this.addedClasses[osid]) {
        if (this.addedClasses[osid].hasOwnProperty(i)) {
          $selector.removeClass(this.addedClasses[osid].shift());
        }
      }
      if (!isControl) {
        $selector.addClass(selectedContent);
        this.addedClasses[osid].push(selectedContent);
      }
    }
  };

  Drupal.personalizeElements.appendHtml = {
    execute : function($selector, selectedContent, isControl, osid) {
      var id = 'personalize-elements-append-' + osid;
      $('#' + id).remove();
      if (!isControl) {
        $selector.append('<span id="' + id + '">' + selectedContent + '</span>');
      }
    }
  };

  Drupal.personalizeElements.prependHtml = {
    execute : function($selector, selectedContent, isControl, osid) {
      var id = 'personalize-elements-prepend-' + osid;
      $('#' + id).remove();
      if (!isControl) {
        $selector.prepend('<span id="' + id + '">' + selectedContent + '</span>');
      }
    }
  };

})(jQuery);
