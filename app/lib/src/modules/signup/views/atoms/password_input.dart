import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/input.dart';
import 'package:app/src/modules/signup/views/atoms/signup_form_tag.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class PasswordInput extends HookConsumerWidget {
  const PasswordInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupNotifier = ref.watch(signupProvider.notifier);
    final Color grey = Theme.of(context).colorScheme.shadow;

    final obscure = useState<bool>(true);

    return Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          width: vw(context, 20),
          child: const SignupFormTag(text: '비밀번호'),
        ),
        Container(
          width: vw(context, 70),
          decoration: BoxDecoration(
            border: Border(bottom: BorderSide(color: grey)),
          ),
          child: Row(
            children: [
              Expanded(
                child: Input(
                  init: '',
                  obscureText: obscure.value,
                  onChangeText: (password) =>
                      signupNotifier.setPassword(password),
                  hint: '8~18자 / 문자, 숫자, 특수문자',
                ),
              ),
              IconButton(
                onPressed: () {
                  obscure.value = !obscure.value;
                },
                icon: obscure.value
                    ? const Icon(Icons.visibility)
                    : const Icon(Icons.visibility_off),
              )
            ],
          ),
        )
      ],
    );
  }
}
