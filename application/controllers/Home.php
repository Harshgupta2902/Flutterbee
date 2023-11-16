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
				'title' => "CupertinoAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
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
				'title' => "CupertinoAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
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

		$adddata['cards'] = [	
			array(
				'title' => "CupertinoAppBar",
				'chunk' => "8bc9d9989b0e1798e674f0615e72e2d6",
				'gif' => "gif/cupertino_date_select.gif",
				'image' => "banner/cupertinoDate.png",
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
