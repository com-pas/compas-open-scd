export const SCL_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;
export const SCL_TYPE_PATTERN = /^[A-Za-z0-9_-]{1,32}$/;
export const SCL_VERSION_PATTERN = /^\d{1,9}\.\d{1,9}\.\d{1,9}$/;

export function assertValidSclId(id: string): void {
  if (id !== '' && !SCL_ID_PATTERN.test(id)) {
    throw new Error(
      `Invalid SCL id "${id}": expected format ${SCL_ID_PATTERN}`
    );
  }
}

export function assertRequiredSclId(id: string): void {
  if (id === '') {
    throw new Error('Missing SCL id');
  }
  assertValidSclId(id);
}

export function assertValidSclType(type: string): void {
  if (!SCL_TYPE_PATTERN.test(type)) {
    throw new Error(`Invalid SCL type "${type}": expected ${SCL_TYPE_PATTERN}`);
  }
}

export function assertValidSclVersion(version: string): void {
  if (!SCL_VERSION_PATTERN.test(version)) {
    throw new Error(
      `Invalid SCL version "${version}": expected ${SCL_VERSION_PATTERN}`
    );
  }
}
