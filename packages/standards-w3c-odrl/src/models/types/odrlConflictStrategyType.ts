// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * The types for ODRL Conflict Resolution Strategies.
 */
export const OdrlConflictStrategyType = {
	/**
	 * Permission type.
	 */
	Perm: "perm",

	/**
	 * Prohibition type.
	 */
	Prohibit: "prohibit",

	/**
	 * Invalid type.
	 */
	Invalid: "invalid"
} as const;

/**
 * The types for ODRL Conflict Resolution Strategies.
 */
export type OdrlConflictStrategyType =
	(typeof OdrlConflictStrategyType)[keyof typeof OdrlConflictStrategyType];
