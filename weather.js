#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const saveToken = async (token) => {
  
}

const saveCity = async (city) => {

}

const getForcast = async () => {

}

const initCLI = () => {
  const args = getArgs(process.argv);
	if (args.h) {
		return printHelp();
	}
	if (args.s) {
		return saveCity(args.s);
	}
	if (args.t) {
		return saveToken(args.t);
	}
	return getForcast();
}

initCLI();