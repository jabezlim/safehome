<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Products extends CI_Controller
{
	public function index($id=null)
	{
		$this->load->view('topnav');
		$this->load->view('products/prodtop');
		$this->load->view($id ? 'products/prod'.$id : 'products');		
		$this->load->view('footer');
	}
}