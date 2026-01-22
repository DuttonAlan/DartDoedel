import { Component, inject } from '@angular/core';
import { AppStateService } from '../../state/app-state.service';
import { Subject, takeUntil } from 'rxjs';
import { GameMode, GameSettings, InMode, OutMode, WinType, defaultSettings, formatGameMode, formatInMode, formatOutMode, formatWinType } from '../../interfaces/game-settings';
import { GameSettingsComponent } from '../../pages/game-settings/game-settings';

@Component({
  selector: 'app-game-infos',
  imports: [],
  templateUrl: './game-infos.html',
  styleUrl: './game-infos.scss',
})
export class GameInfos {
  private appStateService = inject(AppStateService);

  private destroy$ = new Subject<void>();
    
  settings: GameSettings = defaultSettings;

  ngOnInit(): void {
    this.appStateService
      .getAsObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        this.settings = state.currentSettings;
      });
  }

  ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

  public getInMode(inMode: InMode): string {
    return formatInMode(inMode);
  }

  public getOutMode(outMode: OutMode): string {
    return formatOutMode(outMode);
  }

  public getWinType(winType: WinType): string {
    return formatWinType(winType);
  }
}
