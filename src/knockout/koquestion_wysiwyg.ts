/// <reference path="../question_wysiwyg.ts" />
module Survey {
    export class QuestionWysiwyg extends QuestionWysiwygModel {
        constructor(public name: string) {
            super(name);
            new QuestionImplementor(this);
        }
        onSurveyValueChanged(newValue: any) {
            super.onSurveyValueChanged(newValue);
        }
    }
    export class QuestionWysiwygImplementor extends QuestionImplementor {
        constructor(question: Question) {
            super(question);
        }
        public set value(newValue: any) {
            this.koValue(newValue);
        }
    }

    JsonObject.metaData.overrideClassCreatore("wysiwyg", function () { return new QuestionWysiwyg(""); });
    QuestionFactory.Instance.registerQuestion("wysiwyg", (name) => { return new QuestionWysiwyg(name); });
}
