<?php
/**
 * @package         FireBox
 * @version         2.0.15 Free
 * 
 * @author          FirePlugins <info@fireplugins.com>
 * @link            https://www.fireplugins.com
 * @copyright       Copyright © 2023 FirePlugins All Rights Reserved
 * @license         GNU GPLv3 <http://www.gnu.org/licenses/gpl.html> or later
*/

namespace FireBox\Core\Form\Actions\Actions;

if (!defined('ABSPATH'))
{
	exit; // Exit if accessed directly.
}

class SendInBlue extends \FireBox\Core\Form\Actions\Action
{
	protected function prepare()
	{
		$this->action_settings = [
			'api_key' => isset($this->form_settings['attrs']['sendinblueAPIKey']) ? trim($this->form_settings['attrs']['sendinblueAPIKey']) : '',
			'list_id' => isset($this->form_settings['attrs']['sendinblueListID']) ? trim($this->form_settings['attrs']['sendinblueListID']) : '',
			'updateexisting' => isset($this->form_settings['attrs']['sendinblueUpdateExisting']) ? $this->form_settings['attrs']['sendinblueUpdateExisting'] : true,
			'doubleoptin' => isset($this->form_settings['attrs']['sendinblueDoubleOptin']) ? $this->form_settings['attrs']['sendinblueDoubleOptin'] : false,
			'doubleoptin_redirect_url' => isset($this->form_settings['attrs']['sendinblueDOIRedirectURL']) ? $this->form_settings['attrs']['sendinblueDOIRedirectURL'] : '',
			'doubleoptin_template_id' => isset($this->form_settings['attrs']['sendinblueDOITemplateID']) ? $this->form_settings['attrs']['sendinblueDOITemplateID'] : ''
		];
	}

	/**
	 * Runs the action.
	 * 
	 * @throws  Exception
	 * 
	 * @return  void
	 */
	public function run()
	{
		$api = new \FPFramework\Base\Integrations\SendInBlue([
			'api' => $this->action_settings['api_key']
		]);

		$api->subscribe(
			$this->submission['prepared_fields']['email']['value'],
			$this->getParsedFieldValues(),
			$this->action_settings['list_id'],
			$this->action_settings['updateexisting'],
			$this->action_settings['doubleoptin'],
			$this->action_settings['doubleoptin_redirect_url'],
			$this->action_settings['doubleoptin_template_id']
		);
		
		if (!$api->success())
		{
			throw new \Exception($api->getLastError());
		}

		return true;
	}

	/**
	 * Validates the action prior to running it.
	 * 
	 * @return  void
	 */
	public function validate()
	{
		if (empty($this->action_settings['api_key']))
		{
			throw new \Exception('SendInBlue error: API Key is missing.');
		}

		if (empty($this->action_settings['list_id']))
		{
			throw new \Exception('SendInBlue error: No SendInBlue list selected.');
		}

		return true;
	}
}