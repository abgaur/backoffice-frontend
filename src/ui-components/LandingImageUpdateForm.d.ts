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
export declare type LandingImageUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    sequence?: string;
    type?: string;
    updatedAt?: string;
};
export declare type LandingImageUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    sequence?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LandingImageUpdateFormOverridesProps = {
    LandingImageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    sequence?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LandingImageUpdateFormProps = React.PropsWithChildren<{
    overrides?: LandingImageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    landingImage?: any;
    onSubmit?: (fields: LandingImageUpdateFormInputValues) => LandingImageUpdateFormInputValues;
    onSuccess?: (fields: LandingImageUpdateFormInputValues) => void;
    onError?: (fields: LandingImageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LandingImageUpdateFormInputValues) => LandingImageUpdateFormInputValues;
    onValidate?: LandingImageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LandingImageUpdateForm(props: LandingImageUpdateFormProps): React.ReactElement;
