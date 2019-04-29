'use strict';

module.exports = {
	CLI_TITLE: 'CLI_TITLE',
	COMMAND_IMPORTOBJECTS: {
		ERRORS: {
			CALLING_LIST_OBJECTS: "COMMAND_IMPORTOBJECTS_ERRORS_COMMAND_IMPORTOBJECTS",
			PROCESS_FAILED: "COMMAND_IMPORTOBJECTS_ERRORS_PROCESS_FAILED"
		},
		QUESTIONS: {
			APPID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_APPID',
			FILTER_BY_CUSTOM_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_FILTER_BY_CUSTOM_OBJECTS',
			FILTER_BY_SCRIPT_ID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_FILTER_BY_SCRIPT_ID',
			SCRIPT_ID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SCRIPT_ID',
			SHOW_ALL_CUSTOM_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SHOW_ALL_CUSTOM_OBJECTS',
			SPECIFIC_APPID: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SPECIFIC_APPID',
			DESTINATION_FOLDER: 'COMMAND_IMPORTOBJECTS_QUESTIONS_DESTINATION_FOLDER',
			OVERRITE_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_OVERRITE_OBJECTS',
			SELECT_OBJECTS: 'COMMAND_IMPORTOBJECTS_QUESTIONS_SELECT_OBJECTS',
		},
		MESSAGES: {
			LOADING_OBJECTS: "COMMAND_IMPORTOBJECTS_MESSAGES_LOADING_OBJECTS",
			CANCEL_IMPORT: "COMMAND_IMPORTOBJECTS_MESSAGES_CANCEL_IMPORT",
			NO_OBJECTS_TO_LIST: "COMMAND_IMPORTOBJECTS_MESSAGES_NO_OBJECTS_TO_LIST",
			IMPORTING_OBJECTS: "COMMAND_IMPORTOBJECTS_MESSAGES_IMPORTING_OBJECTS",
			IMPORTED_OBJECTS: "COMMAND_IMPORTOBJECTS_MESSAGES_IMPORTED_OBJECTS",
			UNIMPORTED_OBJECTS: "COMMAND_IMPORTOBJECTS_MESSAGES_UNIMPORTED_OBJECTS",
		}
	},
	COMMAND_LISTFILES: {
		ERROR: 'COMMAND_LISTFILES_ERROR',
		LOADING_FILES: 'COMMAND_LIST_FILES_LOADING_FILES',
		LOADING_FOLDERS: 'COMMAND_LIST_FILES_LOADING_FOLDERS',
		RESTRICTED_FOLDER: 'COMMAND_LIST_FILES_RESTRICTED_FOLDER',
		SELECT_FOLDER: 'COMMAND_LIST_FILES_SELECT_FOLDER',
	},
	COMMAND_LISTOBJECTS: {
		LISTING_OBJECTS: 'COMMAND_LISTOBJECTS_LISTING_OBJECTS',
		QUESTIONS: {
			APPID: 'COMMAND_LISTOBJECTS_QUESTIONS_APPID',
			FILTER_BY_CUSTOM_OBJECTS: 'COMMAND_LISTOBJECTS_QUESTIONS_FILTER_BY_CUSTOM_OBJECTS',
			FILTER_BY_SCRIPT_ID: 'COMMAND_LISTOBJECTS_QUESTIONS_FILTER_BY_SCRIPT_ID',
			SCRIPT_ID: 'COMMAND_LISTOBJECTS_QUESTIONS_SCRIPT_ID',
			SHOW_ALL_CUSTOM_OBJECTS: 'COMMAND_LISTOBJECTS_QUESTIONS_SHOW_ALL_CUSTOM_OBJECTS',
			SPECIFIC_APPID: 'COMMAND_LISTOBJECTS_QUESTIONS_SPECIFIC_APPID',
		},
		SUCCESS_OBJECTS_IMPORTED: 'COMMAND_LISTOBJECTS_SUCCESS_OBJECTS_IMPORTED',
		SUCCESS_NO_OBJECTS: 'COMMAND_LISTOBJECTS_SUCCESS_NO_OBJECTS',
	},
	COMMAND_OPTION_INTERACTIVE_HELP: 'COMMAND_OPTION_INTERACTIVE_HELP',
	COMMAND_OPTION_IS_MANDATORY: 'COMMAND_OPTION_IS_MANDATORY',
	COMMAND_OPTIONS_VALIDATION_ERRORS: 'COMMAND_OPTIONS_VALIDATION_ERRORS',
	ERRORS: {
		APPID_FORMAT: 'ERRORS_APPID_FORMAT',
		CHOOSE_OPTION: 'ERRORS_CHOOSE_OPTION',
		EMPTY_FIELD: 'ERRORS_EMPTY_FIELD',
		FILE: 'ERRORS_FILE',
		FILE_NOT_EXIST: 'ERRORS_FILE_NOT_EXIST',
		NO_OBJECTS: 'ERRORS_NO_OBJECTS',
		PROCESS_FAILED: 'ERRORS_PROCESS_FAILED',
		SDKEXECUTOR: {
			AUTHENTICATION: 'ERRORS_SDKEXECUTOR_AUTHENTICATION',
			RUNNING_COMMAND: 'ERRORS_SDKEXECUTOR_RUNNING_COMMAND',
			SDK_ERROR: 'ERRORS_SDKEXECUTOR_SDK_ERROR'
		},
		SETUP_REQUIRED: 'ERRORS_SETUP_REQUIRED',
		SETUP_VALID_FOLDER: 'ERRORS_SETUP_VALID_FOLDER',
		XML_MANIFEST_TAG_MISSING: 'ERRORS_XML_MANIFEST_TAG_MISSING',
		XML_PROJECTTYPE_ATTRIBUTE_MISSING: 'ERRORS_XML_PROJECTTYPE_ATTRIBUTE_MISSING',
		XML_PROJECTTYPE_INCORRECT: 'ERRORS_XML_PROJECTTYPE_INCORRECT',
	},
	INTERACTIVE_OPTION_DESCRIPTION: 'INTERACTIVE_OPTION_DESCRIPTION',
	NO: 'NO',
	YES: 'YES',
};