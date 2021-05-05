import { strict as assert } from 'assert';
import Config from '../config.js';

function cleanEndpoint(ep) {
  const cleaned = ep.slice(-1) === '/'
                    ? Config.imageEndpoint
                    : Config.imageEndpoint + '/';
  return cleaned; 
}

/**
 *
 */
export async function GetImages(userId) {
    const res = await fetch(cleanEndpoint(Config.imageEndpoint) + userId);
    const out = res.json();
    return out;
}

/**
 * Deletes a array of images from the database
 */
export async function DeleteImages(imageIdArr) {
  assert(Array.isArray(imageIdArr));

  const results = [];
  for (const i of imageIdArr) {
    const endpointWithImageId = cleanEndpoint(Config.imageEndpoint) + i;

    const res = await fetch(endpointWithImageId, {
      method: 'DELETE'
    });

    results.push(res.json());
  }

  return results;
}

/**
 * Uploads an array of image object to the database
 */
export async function UploadImages(imageArr) {
  assert(Array.isArray(imageArr));

  const results = [];
  for (const i of imageArr) {
    var fd = new FormData();
    fd.append('file', i.file);
    fd.append('name', i.meta.name);
    fd.append('userId', i.userId);

    const res = await fetch(Config.imageEndpoint, {
      method: 'POST',
      body: fd,
      headers: {
      }
    });
    
    results.push(res.json());
  }

  return results;
}
