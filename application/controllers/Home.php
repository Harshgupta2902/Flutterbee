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
		$adddata = array(
			'first_name' => "harsh",
			'phone' => "kbvyuscbsdaish   hu w",
			'email' => "kbvyuscbsdaish   hu w",
			'street' => "kbvyuscbsdaish   hu w",
			'city' => "kbvyuscbsdaish   hu w",
			'state' => "kbvyuscbsdaish   hu w",
			'zip' => "kbvyuscbsdaish   hu w",
			'quantity' => "kbvyuscbsdaish   hu w",
			'cooked' => "kbvyuscbsdaish   hu w",
			'category' => "kbvyuscbsdaish   hu w",
			'message' => "kbvyuscbsdaish   hu w",

		);
		$this->load->view('index', $adddata);
	}
	public function contact()
	{	
		$this->load->view('contact_us');
	}
	public function join()
	{
		$this->load->view('joinUs');
	}
	public function components()
	{
		$dataParam = $this->input->get('data');
		$dataArray = json_decode(urldecode($dataParam), true);
  // Use the $dataArray in your controller logic
        if (!empty($dataArray)) {
            // Do something with $dataArray, for example, pass it to the view
            $data['userData'] = $dataArray;
        }
		$this->load->view('Assets/components', $data);
	}

	public function utility()
	{
		$adddata['appBar'] = [	
			array(
				'title' => "SliverAppBar",
				'chunk' => "fa533ffa669b233d43c41c85457c19c7",
				'gif' => "gif/sliverAppBar.gif",
				'image' => "banner/sliverAppBar.png",
			),
			array(
				'title' => "SampleAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
			),
			array(
				'title' => "flutternoAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
			)
		];

		$adddata['uiComponents'] = [	
			array(
				'title' => "TextFormField",
				'chunk' => "509e50861c30c33d98ec07d93e9dc69a",
				'gif' => "gif/textfield.gif",
				'image' => "banner/textfield.png",
			),
			array(
				'title' => "DropDown Field",
				'chunk' => "e6d57174ca42b328af64fa858aa32d0a",
				'gif' => "gif/dropDown.gif",
				'image' => "banner/dropDownField.png",
			),
			array(
				'title' => "Radio Button",
				'chunk' => "f7e3c84ad1a33c782ded4b33a61907d7",
				'gif' => "gif/radioButton.gif",
				'image' => "banner/radioButton.png",
			),
			array(
				'title' => "Multi Select Button",
				'chunk' => "14f5f46a6f563f90375574edbbcb6c12",
				'gif' => "gif/multiSelect.gif",
				'image' => "banner/multiSelect.png",
			)
		];

		$adddata['cards'] = [
			array(
				'title' => "Grid View",
				'chunk' => "dba637f2029050b9ac358e013471c17c",
				'gif' => "banner/GridView.png",	
				'image' => "banner/GridView.png",
			),
			array(
				'title' => "SampleAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
			),
			array(
				'title' => "flutternoAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
			)
		];
		
		
		$this->load->view('utility', $adddata);
	}
	public function getStarted()
	{
		$this->load->view('getStarted');
	}
}
