<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		// $this->load->database();
		$this->load->helper('url');
		// $this->load->model('Createdata');
		// $this->load->library('form_validation');
		// $this->load->library('pagination');
		// $this->load->helper('alert_helper');
		// $this->load->library('Alert');
		// $this->load->library('M_pdf');

	}
	
	public function index()
	{
		$this->load->helper('url'); 
		$this->load->view('index');
	}
	public function contact()
	{
		$this->load->view('contact');
	}
	public function join()
	{
		$this->load->view('joinUs');
	}
	public function components()
	{
		$this->load->view('components');
	}
	public function getStarted()
	{
		$this->load->view('getStarted');
	}
}
