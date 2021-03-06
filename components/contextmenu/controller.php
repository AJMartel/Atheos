<?php

/*
    *  Copyright (c) Codiad & Kent Safranski (codiad.com), distributed
    *  as-is and without warranty under the MIT License. See
    *  [root]/license.txt for more. This information must remain intact.
    */

require_once('../../common.php');
require_once('class.contextmenu.php');

//////////////////////////////////////////////////////////////////
// Verify Session or Key
//////////////////////////////////////////////////////////////////

checkSession();

//////////////////////////////////////////////////////////////////
// Get Action
//////////////////////////////////////////////////////////////////

if (!empty($_GET['action'])) {
	$action = $_GET['action'];
} else {
	exit('{"status":"error","data":{"error":"No Action Specified"}}');
}


//////////////////////////////////////////////////////////////////
// Security Check
//////////////////////////////////////////////////////////////////

if (isset($_GET['path'])) {
	$path = $_GET['path'];
	if (!checkPath($path)) {
		die('{"status":"error","message":"Invalid Path"}');
	}
}

//////////////////////////////////////////////////////////////////
// Define Root
//////////////////////////////////////////////////////////////////

$_GET['root'] = WORKSPACE;

//////////////////////////////////////////////////////////////////
// Handle Action
//////////////////////////////////////////////////////////////////

$Contextmenu = new Contextmenu($_GET, $_POST, $_FILES);
$Filemanager->project = @$_SESSION['project']['path'];

switch ($action) {
	case 'upload':
		$Contextmenu->upload();
		break;
	default:
		exit('{"status":"fail","data":{"error":"Unknown Action"}}');
	}