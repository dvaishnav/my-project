<?php

namespace App\Controller;

use App\Controller\AppController;

class DeepakController extends AppController
{
	
	public function index()
	{
		//$posts = $this->Posts->find('all');
		$this->set('post','123');
	}
	
	public function add()
	{
		
	}
	
}
