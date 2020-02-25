// flow-typed signature: 25accb898ac26fcda1a2d6311ac92caf
// flow-typed version: <<STUB>>/i18next_v15.1.2/flow_v0.104.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'i18next'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'i18next' {
  declare type T = (key: string | $ReadOnlyArray<string>, options?: {}) => string;
  declare function init(options: {}, callback?: (?Error, ?T) => mixed): Promise<T>;
  declare function exists(key: string, options?: {}): boolean;
  declare function getFixedT(lng: string, ns?: string): T;
  declare function changeLanguage(lng?: string, callback?: (?Error, ?T) => mixed): Promise<T>;
  declare function loadNamespaces(ns: string, callback?: (?Error) => mixed): Promise<void>;
  declare function loadLanguages(lngs: $ReadOnlyArray<string>, callback?: (?Error) => mixed): Promise<void>;
  declare function reloadResources(lngs?: ?string | $ReadOnlyArray<string>, ns?: ?string | $ReadOnlyArray<string>): Promise<void>;
  declare function dir(lng: string): "rtl" | "ltr";

  declare type I18next = {
    language: string,
    languages: $ReadOnlyArray<string>,
    t: T,

    init: typeof init,
    use: (any) => I18next,
    exists: typeof exists,
    getFixedT: typeof getFixedT,
    changeLanguage: typeof changeLanguage,
    loadNamespaces: typeof loadNamespaces,
    loadLanguages: typeof loadLanguages,
    reloadResources: typeof reloadResources,
    setDefaultNamespace: (ns: string) => I18next,
    dir: typeof dir,
  }

  declare module.exports: I18next;
}