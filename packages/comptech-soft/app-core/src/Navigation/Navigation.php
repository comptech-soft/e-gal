<?php

namespace Comptechsoft\Appcore\Navigation;

use Illuminate\Support\Collection;

class Navigation {

    public $caption = NULL;
    public $icon = NULL;
    public $event = NULL;

    public $options = NULL;

    public function __construct($caption, $icon, $event) {
        $this->caption = $caption;
        $this->icon = $icon;
        $this->event = $event;
        $this->options = new Collection();
    }

    public function addOption($key, Navigation $option) {
        $this->options->put($key, $option);
        return $this;
    }
    
}