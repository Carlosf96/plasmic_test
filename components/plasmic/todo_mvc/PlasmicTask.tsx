// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qZkA3qWw23164No1KhMX9w
// Component: PVH9uPZpgA1_E
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { ThemeContext, ThemeValue } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: PvMXhxpNYVIa7/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: qZkA3qWw23164No1KhMX9w/projectcss
import * as sty from "./PlasmicTask.module.css"; // plasmic-import: PVH9uPZpgA1_E/css

export type PlasmicTask__VariantMembers = {
  state: "checked" | "editing";
};

export type PlasmicTask__VariantsArgs = {
  state?: SingleChoiceArg<"checked" | "editing">;
};

type VariantPropType = keyof PlasmicTask__VariantsArgs;
export const PlasmicTask__VariantProps = new Array<VariantPropType>("state");

export type PlasmicTask__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTask__ArgsType;
export const PlasmicTask__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTask__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultTaskProps {
  children?: React.ReactNode;
  state?: SingleChoiceArg<"checked" | "editing">;
  className?: string;
}

function PlasmicTask__RenderFunc(props: {
  variants: PlasmicTask__VariantsArgs;
  args: PlasmicTask__ArgsType;
  overrides: PlasmicTask__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootActive, triggerRootActiveProps] = useTrigger("usePressed", {});
  const triggers = {
    active_root: isRootActive
  };

  const globalVariants = ensureGlobalVariants({
    theme: React.useContext(ThemeContext)
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__global_theme_dark]: hasVariant(
          globalVariants,
          "theme",
          "dark"
        ),
        [sty.root__state_checked]: hasVariant(variants, "state", "checked"),
        [sty.root__state_editing]: hasVariant(variants, "state", "editing"),
        [sty.root__state_editing_global_theme_dark]:
          hasVariant(variants, "state", "editing") &&
          hasVariant(globalVariants, "theme", "dark")
      })}
      data-plasmic-trigger-props={[triggerRootActiveProps]}
    >
      <div
        className={classNames(defaultcss.all, sty.box__ondqo, {
          [sty.box__state_editing__ondqovOl7]: hasVariant(
            variants,
            "state",
            "editing"
          ),
          [sty.box__state_editing_global_theme_dark__ondqovOl7E1OtI]:
            hasVariant(variants, "state", "editing") &&
            hasVariant(globalVariants, "theme", "dark")
        })}
      >
        {(
          triggers.active_root
            ? true
            : hasVariant(variants, "state", "editing")
            ? false
            : true
        ) ? (
          <div
            className={classNames(defaultcss.all, sty.box__sIvYk, {
              [sty.box__state_checked__sIvYkHzDra]: hasVariant(
                variants,
                "state",
                "checked"
              ),
              [sty.box__state_checked_global_theme_dark__sIvYkHzDraE1OtI]:
                hasVariant(variants, "state", "checked") &&
                hasVariant(globalVariants, "theme", "dark"),
              [sty.box__state_editing__sIvYkvOl7]: hasVariant(
                variants,
                "state",
                "editing"
              )
            })}
          >
            {(hasVariant(variants, "state", "checked") ? true : false) ? (
              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(defaultcss.img, sty.img, {
                  [sty.img__state_checked]: hasVariant(
                    variants,
                    "state",
                    "checked"
                  ),
                  [sty.img__state_checked_global_theme_dark]:
                    hasVariant(variants, "state", "checked") &&
                    hasVariant(globalVariants, "theme", "dark"),
                  [sty.img__state_editing]: hasVariant(
                    variants,
                    "state",
                    "editing"
                  )
                })}
                role={"img"}
                src={
                  hasVariant(variants, "state", "checked")
                    ? ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHlsZT0iZmlsbDogcmdiKDQsIDE0MywgNjQpOyI+PHBhdGggZD0iTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeiIvPjwvc3ZnPg==" as const)
                    : ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSJjdXJyZW50Q29sb3IiIHN0cm9rZT0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+" as const)
                }
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <div
        className={classNames(defaultcss.all, sty.box__pLiH, {
          [sty.box__global_theme_dark__pLiHe1OtI]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),
          [sty.box__state_editing__pLiHvOl7]: hasVariant(
            variants,
            "state",
            "editing"
          ),
          [sty.box__state_editing_global_theme_dark__pLiHvOl7E1OtI]:
            hasVariant(variants, "state", "editing") &&
            hasVariant(globalVariants, "theme", "dark")
        })}
      >
        {(hasVariant(variants, "state", "editing") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.box__stA, {
              [sty.box__state_checked__stAHzDra]: hasVariant(
                variants,
                "state",
                "checked"
              ),
              [sty.box__state_editing__stAVOl7]: hasVariant(
                variants,
                "state",
                "editing"
              )
            })}
          >
            <p.PlasmicSlot
              defaultContents={"Some kind of text here"}
              value={args.children}
              className={classNames(sty.slotChildren, {
                [sty.slotChildren__global_theme_dark]: hasVariant(
                  globalVariants,
                  "theme",
                  "dark"
                ),
                [sty.slotChildren__state_checked]: hasVariant(
                  variants,
                  "state",
                  "checked"
                ),
                [sty.slotChildren__state_checked_global_theme_dark]:
                  hasVariant(variants, "state", "checked") &&
                  hasVariant(globalVariants, "theme", "dark"),
                [sty.slotChildren__state_editing]: hasVariant(
                  variants,
                  "state",
                  "editing"
                )
              })}
            />
          </div>
        ) : null}
        {(hasVariant(variants, "state", "editing") ? true : false) ? (
          <input
            data-plasmic-name={"textbox"}
            data-plasmic-override={overrides.textbox}
            className={classNames(defaultcss.input, sty.textbox, {
              [sty.textbox__state_editing]: hasVariant(
                variants,
                "state",
                "editing"
              ),
              [sty.textbox__state_editing_global_theme_dark]:
                hasVariant(variants, "state", "editing") &&
                hasVariant(globalVariants, "theme", "dark")
            })}
            placeholder={"Enter todo" as const}
            type={"text" as const}
            value={"" as const}
          />
        ) : null}
        {(hasVariant(variants, "state", "editing") ? false : true) ? (
          <div
            className={classNames(defaultcss.all, sty.box__vDm8S, {
              [sty.box__state_editing__vDm8SvOl7]: hasVariant(
                variants,
                "state",
                "editing"
              )
            })}
          >
            <button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames(
                defaultcss.button,
                defaultcss.__wab_text,
                sty.button,
                {
                  [sty.button__state_editing]: hasVariant(
                    variants,
                    "state",
                    "editing"
                  )
                }
              )}
            >
              {"×"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "textbox", "button"],
  img: ["img"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTask__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTask__VariantsArgs;
  args?: PlasmicTask__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTask__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTask__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTask__ArgProps,
      internalVariantPropNames: PlasmicTask__VariantProps
    });

    return PlasmicTask__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTask";
  } else {
    func.displayName = `PlasmicTask.${nodeName}`;
  }
  return func;
}

export const PlasmicTask = Object.assign(
  // Top-level PlasmicTask renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicTask
    internalVariantProps: PlasmicTask__VariantProps,
    internalArgProps: PlasmicTask__ArgProps
  }
);

export default PlasmicTask;
/* prettier-ignore-end */
