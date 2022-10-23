# Quest00

## Git

- git
  - `git commit`
    - git 저장소에 디렉토리의 모든 파일에 대한 스냅샷을 저장한다.
    - commit 을 가능한 가볍게 유지하기 위해, 디렉토리 전체를 복사하지 않고, 저장소의 이전 버전과 다음 버전의 변경내역(delta)를 저장한다.
  - `git branch`
    - 브랜치는 특정 커밋에 대한 참조(reference) 이며, 하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역으로 볼 수 있다.
    - `git branch [branch]`: branch 생성
    - `git checkout [branch]`: branch checkout
    - `git merge`
      - 두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어낸다.
      - 한 부모의 모든 작업 내역과 나머지 부모의 모든 작업, 그리고 두 부모의 모든 부모들의 작업 내역을 포함한다.
    - `git rebase`: 커밋들을 모아 복사한 뒤, 다른 곳에 떨궈놓는다.
      - (다른 브랜치가 선택된 상태에서) `git rebase main`: 현재 브랜치를 main 브랜치로 베이스를 옮긴다.
  - HEAD: 현재 체크아웃 된 커밋을 가리킨다. 일반적으로 브랜치의 이름을 가리키고 있는다.
    - HEAD 분리: HEAD 를 분리한다는 것은 HEAD 를 브랜치 대신 커밋에 붙이는 것을 말한다.
  - 상대 참조(Relative Ref): 커밋을 선택하는 방법 중 하나로, 커밋을 구분하는 해시값이 매우 길고 복잡하기 때문에 유용하게 쓰일 수 있다.
    - `^`: 한칸 부모, `git checkout main^^`, `git checkout bugFix^`
    - `~<num>`: num 칸 부모, `git checkout HEAD~3`
  - `git branch -f`: 브랜치를 강제로 옮겨, 특정 커밋에 직접적으로 재지정할 수 있다.
    - `git branch -f main HEAD~3`: main 브랜치를 HEAD 의 3번째 부모로 이동 및 지정
  - `git reset`: 브랜치가 예전의 커밋을 가리키도록 이동한다. `git reset HEAD^`
  - `git revert`: 로컬 브랜치에서는 reset 을 사용할 수 있지만, 리모트 브랜치에서는 변경분을 삭제하고 되돌린 내용을 공유해야 한다. `git revert HEAD`
  - `git cherry-pick`
  - `git clone`
  - `git add`
  - `git push`
  - `git pull`
  - `git stash`
- .git directory



## Checklist

* 형상관리 시스템은 왜 나오게 되었을까요?



* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  * git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
* git과 GitHub은 어떻게 다를까요?
* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?