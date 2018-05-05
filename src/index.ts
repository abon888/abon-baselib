'use strict';

import * as BASELIB from 'baselib';

const APP_NAME = "abon";

export async function init( ms_path: string, serviceName: string ): Promise<any>{
  return await BASELIB.init( __dirname, ms_path, APP_NAME, serviceName );
  // console.log( "abon baselib init complete" );
}

