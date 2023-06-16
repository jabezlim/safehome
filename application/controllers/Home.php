<?php
defined('BASEPATH') or exit('No direct script access allowed');

class About extends CI_Controller
{
	public function index()
	{
		$this->load->view('topnav');
		$this->load->view('home');
		$this->load->view('footer');
	}
}