/**
 * Selectors
 * Source: https://github.com/home-assistant/core/blob/dev/homeassistant/helpers/selector.py
 */
import {
  Domain,
  DeviceClasses,
  Entity,
  PositiveInteger,
  SupportedFeature,
  LegacySyntax,
} from "../types";

export type Selector =
  | ActionSelector
  | AddonSelector
  | AppSelector
  | AreaSelector
  | AssistPipelineSelector
  | AttributeSelector
  | AutomationBehaviorSelector
  | BackupLocationSelector
  | BooleanSelector
  | ChooseSelector
  | ColorRGBSelector
  | ColorTempSelector
  | ConditionSelector
  | ConfigEntrySelector
  | ConstantSelector
  | ConversationAgentSelector
  | CountrySelector
  | DateSelector
  | DateTimeSelector
  | DeviceClassSelector
  | DeviceSelector
  | DurationSelector
  | EntitySelector
  | FileSelector
  | FloorSelector
  | IconSelector
  | LabelSelector
  | LanguageSelector
  | LocationSelector
  | MediaSelector
  | NumberSelector
  | NumericThresholdSelector
  | ObjectSelector
  | QRCodeSelector
  | SelectSelector
  | SerialPortSelector
  | StateClassSelector
  | StateSelector
  | StatisticSelector
  | TargetSelector
  | TemplateSelector
  | TextSelector
  | ThemeSelector
  | TimeSelector
  | TriggerSelector
  | UnitOfMeasurementSelector;

export interface ActionSelector {
  /**
   * The action selector allows the user to input one or more sequences of actions.
   * https://www.home-assistant.io/docs/blueprint/selectors/#action-selector
   */
  action: null | Record<string, never>;
}

export interface AddonSelector {
  /**
   * The add-on selector allows the user to input an add-on slug. On the user interface, it will list all installed add-ons and use the slug of the selected add-on.
   * https://www.home-assistant.io/docs/blueprint/selectors/#add-on-selector
   */
  addon: null | Record<string, never>;
}

export interface AreaSelector {
  /**
   * The area selector shows an area finder that can pick a single area. The value of the input will be the area ID of the user-selected area.
   * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
   */
  area: {
    /**
     * When device options are provided, the list of areas is filtered by areas that at least provide one device that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    device?: DeviceSelectorFilter | DeviceSelectorFilter[];

    /**
     * When entity options are provided, the list of areas is filtered by areas that at least provide one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    entity?: EntitySelectorFilter | EntitySelectorFilter[];

    /**
     * Allows selecting multiple areas. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    multiple?: boolean;
  } | null;
}

export interface AssistPipelineSelector {
  /**
   * The assist pipeline selector shows all available assist pipelines (assistants) of which one can be selected.
   * https://www.home-assistant.io/docs/blueprint/selectors/#assist-pipeline-selector
   */
  assist_pipeline: null | Record<string, never>;
}

export interface AttributeSelector {
  /**
   * The attributes selector shows a list of state attributes from a provided entity of which one can be selected.
   * https://www.home-assistant.io/docs/blueprint/selectors/#attribute-selector
   */
  attribute: {
    /**
     * The entity ID of which an state attribute can be selected from.
     * https://www.home-assistant.io/docs/blueprint/selectors/#attribute-selector
     */
    entity_id: Entity;

    /**
     * List of attribute names to hide from the UI. Hidden attributes can still be provided manually.
     * https://www.home-assistant.io/docs/blueprint/selectors/#attribute-selector
     */
    hide_attributes?: string[];
  };
}

export interface BackupLocationSelector {
  /**
   * The backup location selector shows a list of places a backup could go, depending on what you have configured in storage.
   * https://www.home-assistant.io/docs/blueprint/selectors/#backup-location-selector
   */
  backup_location: null | Record<string, never>;
}

export interface BooleanSelector {
  /**
   * The boolean selector shows a toggle that allows the user to turn on or off the selected option.
   * https://www.home-assistant.io/docs/blueprint/selectors/#boolean-selector
   */
  boolean: null | Record<string, never>;
}

export interface ColorRGBSelector {
  /**
   * The RGB color selector allows the user to select a color from a color picker from the user interface, and returns the RGB color value.
   * https://www.home-assistant.io/docs/blueprint/selectors/#rgb-color-selector
   */
  color_rgb: null | Record<string, never>;
}

export interface ColorTempSelector {
  /**
   * The color temperature selector allows you to select a color temperature from a gradient using a slider.
   * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
   */
  color_temp: {
    /**
     * The chosen unit for the color temperature. This can be either `kelvin` or `mired`. `mired` is the default for historical reasons.
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    unit?: "kelvin" | "mired";

    /**
     * The minimum color temperature in the chosen unit.
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    min?: number;

    /**
     * The maximum color temperature in the chosen unit.
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    max?: number;

    /**
     * The minimum color temperature in mireds (legacy).
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    min_mireds?: PositiveInteger;

    /**
     * The maximum color temperature in mireds (legacy).
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    max_mireds?: PositiveInteger;
  } | null;
}

export interface ConditionSelector {
  /**
   * The condition selector allows the user to input one or more conditions..
   * https://www.home-assistant.io/docs/blueprint/selectors/#condition-selector
   */
  condition: null | Record<string, never>;
}

export interface ConfigEntrySelector {
  /**
   * The config entry selector allows the user to select an integration configuration entry. The selector returns the entry ID of the selected integration configuration entry.
   * https://www.home-assistant.io/docs/blueprint/selectors/#config-entry-selector
   */
  config_entry: {
    /**
     * Can be set to an integration domain. Limits the list of config entries provided by the set integration domain.
     * https://www.home-assistant.io/docs/blueprint/selectors/#config-entry-selector
     */
    integration?: Domain;
  } | null;
}

export interface ConstantSelector {
  /**
   * The constant selector shows a toggle that allows the user to enable the selected option. This is similar to the boolean selector, the difference is that the constant selector has no value when it's not enabled.
   * https://www.home-assistant.io/docs/blueprint/selectors/#constant-selector
   */
  constant: {
    /**
     * The label that is shown in the UI for this constant.
     * https://www.home-assistant.io/docs/blueprint/selectors/#constant-selector
     */
    label?: string;

    /**
     * Translation key for internationalization support.
     * https://www.home-assistant.io/docs/blueprint/selectors/#constant-selector
     */
    translation_key?: string;

    /**
     * Value that is returned when this constant is enabled by the user
     * https://www.home-assistant.io/docs/blueprint/selectors/#constant-selector
     */
    value: string | number | boolean;
  };
}

export interface ConversationAgentSelector {
  /**
   * The conversation agent selector allows picking a conversation agent.
   * https://www.home-assistant.io/docs/blueprint/selectors/#conversation-agent-selector
   */
  conversation_agent: {
    /**
     * Limits the list of conversation agents to those supporting the specified language.
     * https://www.home-assistant.io/docs/blueprint/selectors/#conversation-agent-selector
     */
    language?: string;
  } | null;
}

export interface CountrySelector {
  /**
   * The country selector allows a user to pick a country from a list of countries.
   * https://www.home-assistant.io/docs/blueprint/selectors/#country-selector
   */
  country: {
    /**
     * A list of countries to pick from, this should be ISO 3166 country codes.
     * https://www.home-assistant.io/docs/blueprint/selectors/#country-selector
     */
    countries?: string[];

    /**
     * Should the options be sorted by name, if set to true, the order of the provided countries is kept.
     * https://www.home-assistant.io/docs/blueprint/selectors/#country-selector
     */
    no_sort?: boolean;
  } | null;
}

export interface DateSelector {
  /**
   * The date selector shows a date input that allows the user to specify a date.
   * https://www.home-assistant.io/docs/blueprint/selectors/#date-selector
   */
  date: null | Record<string, never>;
}

export interface DateTimeSelector {
  /**
   * The date selector shows a date and time input that allows the user to specify a date with a specific time.
   * https://www.home-assistant.io/docs/blueprint/selectors/#date--time-selector
   */
  datetime: null | Record<string, never>;
}

interface DeviceSelectorFilter {
  /**
   * Can be set to an integration domain. Limits the list of devices to devices provided by the set integration domain.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  integration?: Domain;

  /**
   * When set, it limits the list of devices to devices provided by the set manufacturer name.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  manufacturer?: string;

  /**
   * When set, it limits the list of devices to devices that have the set model.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  model?: string;

  /**
   * When set, the list of devices is limited to devices that have the set model ID.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  model_id?: string;
}

export interface DeviceSelector {
  /**
   * The device selector shows a device finder that can pick a single device.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  device: {
    /**
     * When entity options are provided, the list of devices is filtered by devices that at least provide one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    entity?: EntitySelectorFilter | EntitySelectorFilter[];

    /**
     * When filter options are provided, the list of devices is filtered by devices that at least provide one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    filter?: DeviceSelectorFilter | DeviceSelectorFilter[];

    /**
     * You can use filter parameter to filter devices".
     */
    integration?: LegacySyntax;

    /**
     * You can use filter parameter to filter devices".
     */
    manufacturer?: LegacySyntax;

    /**
     * You can use filter parameter to filter devices".
     */
    model?: LegacySyntax;

    /**
     * Allows selecting multiple devices. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    multiple?: boolean;
  } | null;
}

export interface DurationSelector {
  /**
   * The duration select allow the user to select a time duration. This can be helpful for, e.g., delays or offsets.
   * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
   */
  duration: {
    /**
     * When true, the duration selector will allow selecting days.
     * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
     */
    enable_day?: boolean;

    /**
     * When true, the duration selector will allow selecting milliseconds.
     * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
     */
    enable_millisecond?: boolean;

    /**
     * Allow negative durations. Will default to False in HA Core 2025.6.0.
     * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
     */
    allow_negative?: boolean;
  } | null;
}

interface EntitySelectorFilter {
  /**
   * Can be set to an integration domain. Limits the list of devices that provide entities by the set integration domain.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  integration?: Domain;
  /**
   * Limits the list of devices that provide entities of a certain domain.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  domain?: Domain | Domain[];
  /**
   * Limits the list of entities to entities that have a certain device class.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  device_class?: DeviceClasses | DeviceClasses[];
  /**
   * Limits the list of entities to entities that have a certain supported feature.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  supported_features?: SupportedFeature | SupportedFeature[];
  /**
   * Limits the list of entities to entities that have a certain unit of measurement.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  unit_of_measurement?: string | string[];
  /**
   * Limits the list of entities to entities of devices matching the given device filter.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  device?: DeviceSelectorFilter;
}

export interface EntitySelector {
  /**
   * The entity selector shows an entity finder that can pick a single entity.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  entity: {
    /**
     * List of entity IDs to exclude from the selectable list.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    exclude_entities?: Entity[];

    /**
     * List of entity IDs to limit the selectable list to.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    include_entities?: Entity[];

    /**
     * You can use filter parameter to filter entities".
     */
    integration?: LegacySyntax;

    /**
     * You can use filter parameter to filter entities".
     */
    domain?: LegacySyntax;

    /**
     * You can use filter parameter to filter entities".
     */
    device_class?: LegacySyntax;

    /**
     * When filter options are provided, the entities are limited by entities that at least match the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    filter?: EntitySelectorFilter | EntitySelectorFilter[];
    /**
     * Allows selecting multiple devices. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    multiple?: boolean;

    /**
     * Allows reordering of entities (only applies if `multiple` is set to `true`).
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    reorder?: boolean;
  } | null;
}

export interface FileSelector {
  /**
   * The file selector allows the user to select a file.
   * https://www.home-assistant.io/docs/blueprint/selectors/#file-selector
   */
  file: {
    /**
     * File type filter using HTML input accept attribute format.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     * https://www.home-assistant.io/docs/blueprint/selectors/#file-selector
     */
    accept: string;
  };
}

export interface FloorSelector {
  /**
   * The icon selector shows an icon picker that allows the user to select an icon.
   * https://www.home-assistant.io/docs/blueprint/selectors/#floor-selector
   */
  floor: {
    /**
     * When device options are provided, the list of floors is filtered by floors that have at least one device matching the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#floor-selector
     */
    device?: DeviceSelectorFilter | DeviceSelectorFilter[];

    /**
     * When entity options are provided, the list only includes floors that at least have one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#floor-selector
     */
    entity?: EntitySelectorFilter | EntitySelectorFilter[];

    /**
     * Allows selecting multiple floors. If set to true, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#floor-selector
     */
    multiple?: boolean;
  } | null;
}

export interface IconSelector {
  /**
   * The icon selector shows an icon picker that allows the user to select an icon.
   * https://www.home-assistant.io/docs/blueprint/selectors/#icon-selector
   */
  icon: {
    /**
     * Placeholder icon to show, when no icon is selected.
     * https://www.home-assistant.io/docs/blueprint/selectors/#icon-selector
     */
    placeholder?: string;
  } | null;
}

export interface LabelSelector {
  /**
   * The label selector shows a label finder that can pick labels.
   * https://www.home-assistant.io/docs/blueprint/selectors/#label-selector
   */
  label: {
    /**
     * Allows selecting multiple labels. If set to true, the resulting value of this selector will be a list instead of a single string value
     * https://www.home-assistant.io/docs/blueprint/selectors/#label-selector
     */
    multiple?: boolean;
  } | null;
}

export interface LanguageSelector {
  /**
   * The language selector allows a user to pick a language from a list of languages.
   * https://www.home-assistant.io/docs/blueprint/selectors/#language-selector
   */
  language: {
    /**
     * A list of languages to pick from, this should be RFC 5646 languages codes.
     * https://www.home-assistant.io/docs/blueprint/selectors/#language-selector
     */
    languages?: string[];

    /**
     * Should the name of the languages be shown in the language of the user, or in the language itself.
     * https://www.home-assistant.io/docs/blueprint/selectors/#language-selector
     */
    native_name?: boolean;

    /**
     * Should the options be sorted by name, if set to true, the order of the provided languages is kept.
     * https://www.home-assistant.io/docs/blueprint/selectors/#language-selector
     */
    no_sort?: boolean;
  } | null;
}

export interface LocationSelector {
  /**
   * The icon selector shows an icon picker that allows the user to select an icon.
   * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
   */
  location: {
    /**
     * An optional icon to show on the map.
     * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
     */
    icon?: string;

    /**
     * Allow selecting the radius of the location. If enabled, the radius will be returned in meters.
     * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
     */
    radius?: boolean;
  } | null;
}

export interface MediaSelector {
  /**
   * The media selector is a powerful selector that allows a user to easily select media to play on a media device.
   * https://www.home-assistant.io/docs/blueprint/selectors/#media-selector
   */
  media: {
    /**
     * List of accepted media types (e.g. `image/*`).
     * https://www.home-assistant.io/docs/blueprint/selectors/#media-selector
     */
    accept?: string[];

    /**
     * Allows selecting multiple media items.
     * https://www.home-assistant.io/docs/blueprint/selectors/#media-selector
     */
    multiple?: boolean;

    /**
     * Allows uploading an image.
     * https://www.home-assistant.io/docs/blueprint/selectors/#media-selector
     */
    image_upload?: boolean;
  } | null;
}

export interface NumberSelector {
  /**
   * The number selector shows either a number input or a slider input, that allows the user to specify a numeric value.
   * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
   */
  number: {
    /**
     * The maximum user-settable number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    max: number;

    /**
     * The minimal user-settable number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    min: number;

    /**
     * This can be either box or slider mode.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    mode?: "box" | "slider";

    /**
     * The step value of the number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    step?: number;

    /**
     * Unit of measurement in which the number value is expressed in.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    unit_of_measurement?: string;
  };
}

export interface ObjectSelector {
  /**
   * The object selector can be used to input arbitrary data in YAML form. This is useful for e.g. lists and dictionaries like service data.
   * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
   */
  object: {
    /**
     * A mapping of field names to field definitions, each with its own selector. Used to render a form for each object.
     * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
     */
    fields?: Record<
      string,
      {
        selector: Selector;
        default?: unknown;
        required?: boolean;
        label?: string;
      }
    >;

    /**
     * Allows entering multiple objects. If set to `true`, the resulting value of this selector will be a list.
     * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
     */
    multiple?: boolean;

    /**
     * The field used to label each item in the list of objects.
     * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
     */
    label_field?: string;

    /**
     * The field used to describe each item in the list of objects.
     * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
     */
    description_field?: string;

    /**
     * Translation key used for translating the selector.
     * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
     */
    translation_key?: string;
  } | null;
}

export interface QRCodeSelector {
  /**
   * The QR code selector shows a QR code.
   * https://www.home-assistant.io/docs/blueprint/selectors/#qr-code-selector
   */
  qr_code: {
    /**
     * The data that should be represented in the QR code.
     * https://www.home-assistant.io/docs/blueprint/selectors/#qr-code-selector
     */
    data: any;

    /**
     * The scale factor to use, this will make the QR code bigger or smaller.
     * https://www.home-assistant.io/docs/blueprint/selectors/#qr-code-selector
     */
    scale?: PositiveInteger;

    /**
     * The error correction level of the QR code, with a higher error correction level the QR code can be scanned even when some pieces are missing.
     * https://www.home-assistant.io/docs/blueprint/selectors/#qr-code-selector
     */
    error_correction_level?: "low" | "medium" | "quartile" | "high";
  };
}

export interface SelectSelector {
  /**
   * The select selector shows a list of available options from which the user can choose.
   * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
   */
  select: {
    /**
     * Allows the user to enter and select a custom value (or multiple custom values in addition to the listed options if `multiple` is set to true).
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    custom_value?: boolean;

    /**
     * This can be either `list` or `dropdown` mode. when not specificied, small lists (5 items or less), are displayed as radio buttons. When more items are added, a dropdown list is used.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    mode?: "list" | "dropdown";

    /**
     * Allows selecting multiple options. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    multiple?: boolean;

    /**
     * Display options in alphabetical order.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    sort?: boolean;

    /**
     * Translation key for internationalization support.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    translation_key?: string;

    /**
     * List of options that the user can choose from.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    options:
      | string[]
      | {
          /**
           * The description to show in the UI for this item.
           * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
           */
          label: string;

          /**
           * The value to return when this label is selected.
           * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
           */
          value: string;
        }[];
  };
}

export interface StateSelector {
  /**
   * The state selector shows a list of states for a provided entity of which one can be selected.
   * https://www.home-assistant.io/docs/blueprint/selectors/#state-selector
   */
  state: {
    /**
     * The entity ID of which a state can be selected from.
     * https://www.home-assistant.io/docs/blueprint/selectors/#state-selector
     */
    entity_id: Entity;
  };
}

export interface TargetSelector {
  /**
   * The target selector is a rather special selector, allowing the user to select targeted entities, devices or areas for service calls.
   * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
   */
  target: {
    /**
     * When device options are provided, the targets are limited by devices that at least match the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
     */
    device?: DeviceSelectorFilter | DeviceSelectorFilter[];

    /**
     * When entity options are provided, the targets are limited by entities that at least match the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
     */
    entity?: EntitySelectorFilter | EntitySelectorFilter[];

    /**
     * When set, only primary entities (not diagnostic or configuration entities) are targeted.
     * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
     */
    primary_entities_only?: boolean;
  } | null;
}

export interface TemplateSelector {
  /**
   * The template can be used for allowing the user to input a Jinja2 template.
   * https://www.home-assistant.io/docs/blueprint/selectors/#template-selector
   */
  template: null | Record<string, never>;
}

export interface TextSelector {
  /**
   * The text selector can be used to input a text string.
   * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
   */
  text: {
    /**
     * Set to true to display the input as a multi-line text box on the user interface.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    multiline?: boolean;

    /**
     * Allows adding list of text strings. If set to true, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    multiple?: boolean;

    /**
     * Allows adding a prefix to the input field.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    prefix?: string;

    /**
     * Allows adding a suffix to the input field.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    suffix?: string;

    /**
     * The type of input. This is a browser hint, which can improve the client side validation of the input. The value isn't validated by the backend.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    type?:
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "month"
      | "number"
      | "password"
      | "search"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week";

    /**
     * Guides the browser on the type of information which should automatically fill the field. This supplies the HTML autocomplete attribute.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    autocomplete?: string;
  } | null;
}

export interface ThemeSelector {
  /**
   * The theme selector allows for selecting a theme from the available themes installed in Home Assistant.
   * https://www.home-assistant.io/docs/blueprint/selectors/#theme-selector
   */
  theme: {
    /**
     * Includes Home Assistant default theme in the list.
     * https://www.home-assistant.io/docs/blueprint/selectors/#theme-selector
     */
    include_default?: boolean;
  } | null;
}

export interface TimeSelector {
  /**
   * The time selector shows a time input that allows the user to specify a time of the day.
   * https://www.home-assistant.io/docs/blueprint/selectors/#time-selector
   */
  time: null | Record<string, never>;
}

export interface TriggerSelector {
  /**
   * The triggers selector allows the user to input one or more triggers. On the user interface, the trigger part of the automation editor is shown.
   * https://www.home-assistant.io/docs/blueprint/selectors/#trigger-selector
   */
  trigger: null | Record<string, never>;
}

export interface AppSelector {
  /**
   * The app selector allows the user to input an app slug. On the user interface, it will list all installed apps and use the slug of the selected app.
   * https://www.home-assistant.io/docs/blueprint/selectors/#app-selector
   */
  app: {
    /**
     * Limits the list of apps to those with the given name.
     */
    name?: string;

    /**
     * Limits the list of apps to those with the given slug.
     */
    slug?: string;
  } | null;
}

export interface AutomationBehaviorSelector {
  /**
   * The automation behavior selector allows the user to choose how a trigger or condition behaves when it targets multiple entities.
   * https://www.home-assistant.io/docs/blueprint/selectors/#automation-behavior-selector
   */
  automation_behavior: {
    /**
     * Whether the selector is used for a trigger or a condition. Determines the available options.
     */
    mode: "trigger" | "condition";

    /**
     * Translation key used for translating the selector.
     */
    translation_key?: string;
  };
}

export interface ChooseSelector {
  /**
   * The choose selector allows the user to pick one of several selectors and provide a value for it.
   * https://www.home-assistant.io/docs/blueprint/selectors/#choose-selector
   */
  choose: {
    /**
     * A mapping of choice names to the selector used for that choice.
     */
    choices: Record<string, { selector: Selector }>;

    /**
     * Translation key used for translating the selector.
     */
    translation_key?: string;
  };
}

export interface DeviceClassSelector {
  /**
   * The device class selector allows the user to pick one or more device classes of a given domain.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-class-selector
   */
  device_class: {
    /**
     * The domain to list device classes for.
     */
    domain:
      | "binary_sensor"
      | "button"
      | "cover"
      | "event"
      | "humidifier"
      | "infrared"
      | "media_player"
      | "number"
      | "sensor"
      | "switch"
      | "update"
      | "valve";

    /**
     * Allows selecting multiple device classes. If set to `true`, the resulting value of this selector will be a list.
     */
    multiple?: boolean;
  };
}

export interface NumericThresholdSelector {
  /**
   * The numeric threshold selector allows the user to define a numeric threshold, using fixed numbers or entities.
   * https://www.home-assistant.io/docs/blueprint/selectors/#numeric-threshold-selector
   */
  numeric_threshold: {
    /**
     * `crossed`: value crossed a threshold. `changed`: value changed and matches the threshold. `is`: value matches the threshold.
     */
    mode: "crossed" | "changed" | "is";

    /**
     * Allowed units of measurement for the threshold values.
     */
    unit_of_measurement?: (string | null)[];

    /**
     * Configuration of the number input used for threshold values.
     */
    number?: NonNullable<NumberSelector["number"]>;

    /**
     * Filter(s) for the entities that can be used as threshold values.
     */
    entity?: EntitySelectorFilter | EntitySelectorFilter[];
  };
}

export interface SerialPortSelector {
  /**
   * The serial port selector allows the user to pick a serial port.
   * https://www.home-assistant.io/docs/blueprint/selectors/#serial-port-selector
   */
  serial_port: {
    /**
     * Integration domains whose discovered ports are marked as recommended.
     */
    extra_recommended_domains?: string[];
  } | null;
}

export interface StateClassSelector {
  /**
   * The state class selector allows the user to pick one or more sensor state classes.
   * https://www.home-assistant.io/docs/blueprint/selectors/#state-class-selector
   */
  state_class: {
    /**
     * Allows selecting multiple state classes. If set to `true`, the resulting value of this selector will be a list.
     */
    multiple?: boolean;

    /**
     * Limits the available state classes.
     */
    state_classes?: (
      | "measurement"
      | "measurement_angle"
      | "total"
      | "total_increasing"
    )[];
  } | null;
}

export interface StatisticSelector {
  /**
   * The statistic selector allows the user to pick one or more statistics.
   * https://www.home-assistant.io/docs/blueprint/selectors/#statistic-selector
   */
  statistic: {
    /**
     * Allows selecting multiple statistics. If set to `true`, the resulting value of this selector will be a list.
     */
    multiple?: boolean;
  } | null;
}

export interface UnitOfMeasurementSelector {
  /**
   * The unit of measurement selector allows the user to pick a unit of measurement.
   * https://www.home-assistant.io/docs/blueprint/selectors/#unit-of-measurement-selector
   */
  unit_of_measurement: {
    /**
     * Limits the units to those valid for the given sensor device class(es).
     */
    device_classes?: string | string[] | null;

    /**
     * Limits the units to those valid for the given sensor state class(es).
     */
    state_classes?: string | string[] | null;

    /**
     * Maps context keys to the names of the fields providing their value.
     */
    context?: {
      filter_device_class?: string;
      filter_state_class?: string;
    };
  } | null;
}
