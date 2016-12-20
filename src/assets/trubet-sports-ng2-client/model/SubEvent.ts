/**
 * trubet.api
 * truebet.api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as models from './models';

export interface SubEvent {
    BaseSubEventId?: number;

    BetTypeDesc?: string;

    BetTypeDisplayComment?: string;

    BetTypeId?: number;

    BetTypeName?: string;

    BetTypeShortName?: string;

    CashOutEnabled?: boolean;

    CloseDateTimeInternetOffset?: number;

    DisablePlaceAllUp?: boolean;

    DisplayComment?: string;

    IsForInternet?: boolean;

    LiveBetting?: boolean;

    LongDisplayName?: string;

    OfferSortMethod?: number;

    Offers?: Array<models.Offer>;

    PlaceBetting?: boolean;

    ResultDateTime?: string;

    SortOrder?: number;

    SpecialConditions?: string;

    SpecialPromotion?: boolean;

    SpecialSubEventId?: number;

    Status?: string;

    SubEventId?: number;

}
