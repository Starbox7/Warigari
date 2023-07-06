import 'package:app/main.dart';
import 'package:app/src/modules/common/styles/size.dart';
import 'package:app/src/modules/common/widgets/input.dart';
import 'package:app/src/modules/signup/views/atoms/signup_form_tag.dart';
import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class PasswordValidInput extends HookConsumerWidget {
  const PasswordValidInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupNotifier = ref.watch(signupProvider.notifier);
    final Color grey = Theme.of(context).colorScheme.shadow;

    final obsucre = useState<bool>(true);

    return Row(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          width: vw(context, 20),
          child: const SignupFormTag(text: '비밀번호 확인'),
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
                  obscureText: obsucre.value,
                  onChangeText: (passwordValid) =>
                      signupNotifier.setPasswordValid(passwordValid),
                  hint: '비밀번호와 동일하게 작성',
                ),
              ),
              IconButton(
                onPressed: () {
                  obsucre.value = !obsucre.value;
                },
                icon: obsucre.value
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
