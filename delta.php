<?php
// Delta Theme extension, https://github.com/

class YellowDelta {
    const VERSION = "0.8.14";
    public $yellow;         // access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
    }
    
    // Handle update
    public function onUpdate($action) {
        $fileName = $this->yellow->system->get("coreExtensionDirectory").$this->yellow->system->get("coreSystemFile");
        if ($action=="install") {
            $this->yellow->system->save($fileName, array("theme" => "delta"));
        } elseif ($action=="uninstall" && $this->yellow->system->get("theme")=="delta") {
            $this->yellow->system->save($fileName, array("theme" => $this->yellow->system->getDifferent("theme")));
        }
    }
}
