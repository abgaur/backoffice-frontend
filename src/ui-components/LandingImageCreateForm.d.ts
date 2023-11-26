/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LandingImageCreateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    sequence?: string;
    type?: string;
    updatedAt?: string;
};
export declare type LandingImageCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    sequence?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingImageCreateFormOverridesProps = {
    LandingImageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    sequence?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandingImageCreateFormProps = React.PropsWithChildren<{
    overrides?: LandingImageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LandingImageCreateFormInputValues) => LandingImageCreateFormInputValues;
    onSuccess?: (fields: LandingImageCreateFormInputValues) => void;
    onError?: (fields: LandingImageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingImageCreateFormInputValues) => LandingImageCreateFormInputValues;
    onValidate?: LandingImageCreateFormValidationValues;
} & React.CSSProperties>;
export default function LandingImageCreateForm(props: LandingImageCreateFormProps): React.ReactElement;
