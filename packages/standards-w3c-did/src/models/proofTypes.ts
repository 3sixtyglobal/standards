// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for proofs.
 */
export const ProofTypes = {
	/**
	 * The type for Data Integrity Proof.
	 */
	DataIntegrityProof: "DataIntegrityProof",

	/**
	 * The type for Json Web Signature 2020.
	 */
	JsonWebSignature2020: "JsonWebSignature2020"
} as const;

/**
 * The types for proofs.
 */
export type ProofTypes = (typeof ProofTypes)[keyof typeof ProofTypes];
