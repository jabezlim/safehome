<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Certificate extends CI_Controller {
	public function index()
	{
		$this->load->view('header');
		$this->load->view('certificate');
		$this->load->view('footer');
	}
}
