import {Rule} from 'eslint';
import {CallExpression} from 'estree';

const meta = {
  docs: {
    description: 'Use Feature postfix if you pass function into `registerFeature`',
  },
  messages: {
    error: 'Name of Feature used in registerFeature must end up with Feature',
  },
};

function create(context: Rule.RuleContext): Rule.RuleListener {
  const checkFeatureNameInFunctionCall = (node: CallExpression) => (functionName: string) => {
    if (node.callee.type !== 'Identifier') {
      return;
    }

    const calledFunction = node.callee.name;

    if (calledFunction !== functionName) {
      return;
    }

    if (node.arguments[0]?.type !== 'Identifier') {
      return;
    }

    const selectorName = node.arguments[0].name;
    const isCorrectName = /\b(\w+Feature|undefined)\b/.test(selectorName);

    if (isCorrectName) {
      return;
    }

    context.report({
      node,
      messageId: 'error',
    });
  };

  return {
    CallExpression(node: CallExpression) {
      ['registerFeature'].forEach(
        checkFeatureNameInFunctionCall(node),
      );
    },
  };
}

export const featureName: Rule.RuleModule = {
  meta,
  create,
};
